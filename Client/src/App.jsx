import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import  Navbar  from './compnents/Layout/Navbar';
import { Layout } from './compnents/Layout/Layout';
import Home from './compnents/UI/Home';
import SignUpForm from './compnents/UI/SignUp';
import NotFoundPage from './compnents/UI/404';
import MentorCard from './compnents/UI/Mantors';
import { getMentors } from './Services/Users';
import ServerErrorPage from './compnents/UI/ServerErrorPage';
import LoginPage from './compnents/UI/LogIn';

const App = () => {

  const router = createBrowserRouter([
      {
        path : "/",
        element: <Layout />,
        children:[
          {
            path:"/",
            element: <Home/>
          },
          {
            path:"/about",
            element: <Home/>
          },
          {
            path:"/mentors",
            element: <MentorCard/>,
            loader: getMentors,
            errorElement:<ServerErrorPage/>
          },
          {
            path:"/contact",
            element: <h1>Hello Contact</h1>
          },
          {
            path:"/login",
            element: <LoginPage/>
          },
          {
            path:"/signup",
            element: <SignUpForm/>
          },
          {
            path:"*",
            element: <NotFoundPage/>
          },
          
        ]
      }
  ])

  return (
    <>
        <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
