import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Books from "./Books";
import Root from "./Root";
import BookDetails from "./BookDetails";

 const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
  
          path: '/',
          element: <Home></Home>
        },
        {
  
          path: '/home',
          element: <Home></Home>
        }
        ,
        {
          path: '/about',
          element: <About></About>
        },
        {
          path:'books',
          loader: async() =>{
            return fetch('https://api.itbook.store/1.0/new')
          },
          element:<Books></Books>
        },
        {
          path:'book:/id',
          element:<BookDetails></BookDetails>

        }
      ]
    }
  ])

export default router;