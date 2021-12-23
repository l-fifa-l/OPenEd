import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Spinner from '../../components/micro/Spinner';
// import UserNav from "../nav/UserNav";

export default function UserRoute({ children }) {
  //children, showNav = true
  //state
  const [ok, setOk] = useState(false);
  //router
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/current-user');
      //   console.log(data);
      if (data.ok) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push('/login');
    }
  };

  return (
    <>
      {!ok ? (
        <Spinner />
      ) : (
        <>{children}</>
        // <div className="container-fluid">
        //   <div className="row">
        //     <div className="col-md-2">{showNav && <UserNav />}</div>
        //     <div className="col-md-10">{children}</div>
        //   </div>
        // </div>
      )}
    </>
  );
}
