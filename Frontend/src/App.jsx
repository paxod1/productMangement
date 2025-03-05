import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/ProductUpdate';

function App() {
  const logininfom = useSelector((state) => state.userlogin?.LoginInfo[0]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (logininfom?.Token) {
      setToken(logininfom.Token);
      localStorage.setItem("token", logininfom.Token);
    }
  }, [logininfom]);

  const app = createBrowserRouter([
    {
      path: "/",
      element: token ? <Home /> : <Login />
    },
    {
      path: "/AddProduct",
      element: token ? <AddProduct /> : <Login />
    },
    {
      path: "/update-product/:id",
      element: token ? <UpdateProduct /> : <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ]);

  return (
    <div>
      <RouterProvider router={app} />
    </div>
  );
}

export default App;
