import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import AuthLayout from '../Layout/AuthLayout';
import Layout from '../Layout/Layout';
import AddProduct from '../Products/AddProduct';
import ListProduct from '../Products/ListProduct';
import SignIn from '../SignIn';
import SignOutCom from '../SignOut';
import AddUser from '../Users/AddUser';
import ListUser from '../Users/ListUser';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} >test</Route>
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/list-product" element={<ListProduct />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/list-user" element={<ListUser />} />
            <Route path="/sign-out" element={<SignOutCom />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            {/* <Route path="sign-up" element={<SignUp />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
