import { Navigate, Outlet } from 'react-router-dom';
import { SignStatus } from '../config/firebase';
// import {SignStatus} from '../config/firebase';

function AuthLayout() {
  const isLoggedIn = SignStatus();
  console.log(isLoggedIn.status);

  if (isLoggedIn.status === null) {
    return <h1> Loading...</h1>;
  } else if (isLoggedIn.status === true) {
    return (
      <h1>
        Welcome {isLoggedIn.name} <Navigate replace to="/" />
      </h1>
    );
  }

  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
