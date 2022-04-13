import { Navigate, Outlet } from 'react-router-dom';
import { SignStatus } from '../config/firebase';

function Layout() {
  const isLoggedIn = SignStatus();
  // console.log(isLoggedIn);

  if (isLoggedIn.status === null) {
    return <h1> Loading...</h1>;
  } else if (isLoggedIn.status === false) {
    return <Navigate replace to="/sign-in" />;
  }

  return (
    <>
      <h1> Welcome {isLoggedIn.name}</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
