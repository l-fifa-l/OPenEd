import { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

//initial state
const initialState = {
  user: null,
};

//create context
const Context = createContext();

//root reducer
//updatte the state and update data from state
const rootReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };

    case 'LOGOUT':
      return { ...state, user: null };

    default:
      return state;
  }
};

//context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  //   //router
  const router = useRouter();

  // access local data in state and dispatch state to context state
  useEffect(() => {
    dispatch({
      type: 'LOGIN',
      payload: JSON.parse(window.localStorage.getItem('user')),
    });
  }, []);

  // for user logged in when the cookie expires

  axios.interceptors.response.use(
    function (response) {
      //any status code that lie WITHIN the range of 2XX cause the function to trigger
      return response;
    },
    function (error) {
      //any status code that lie OUTSIDE the range of 2XX cause the function to trigger
      let res = error.response;
      if (res.state === 401 && res.config && !res.config.__isRetryRequest) {
        return new Promise((resolve, reject) => {
          axios
            .get('/api/logout')
            .then((data) => {
              console.log('/401 error > logout');
              dispatch({ type: 'LOGOUT' });
              window.localStorage.removeItem('user');
              router.push('/login');
            })
            .catch((err) => {
              console.log('AXIOS INTERCEPTORS ERR', err);
              reject(error);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  // csurf token
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get('/api/csrf-token');
      // console.log('CSRF', data);
      axios.defaults.headers['X-CSRF-Token'] = data.getCsrfToken;
    };
    getCsrfToken();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
