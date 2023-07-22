import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './components/Main/Main.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import WrongPath from './components/WrongPath/WrongPath.jsx';
import Colleges from './components/Colleges/Colleges.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main>,
    errorElement: <WrongPath></WrongPath>,
    children: [
      {
        path: "/home", element: <Home></Home>
      },
      {
        path: "colleges", element: <Colleges></Colleges>
      },
      {
        path: "/register", element: <Register></Register>
      },
      {
        path: "/login", element: <Login></Login>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
