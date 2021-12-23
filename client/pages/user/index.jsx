import ContainerBlock from '../../components/Container';
import { useContext } from 'react';
import { Context } from '../../context';
import UserRoute from '../../components/routes/UserRoutes';

export default function UserIndex() {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <ContainerBlock>
      <UserRoute>
        <div className="max-w-7xl mx-auto bg-indigo-600">
          <div className="px-3 py-2">
            <div className="flex flex-col gap-1 text-center">
              <a
                className="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg"
                href=""
                // style={{ backgroundImage: `url(${avatar})` }}
              ></a>
              <pre>{JSON.stringify(user, null, 4)}</pre>
              <p className="font-serif font-semibold"></p>
              <span className="text-sm text-gray-400">
                New York, NY - Los Angeles, CA
              </span>
            </div>
          </div>
        </div>
      </UserRoute>
    </ContainerBlock>
  );
}
