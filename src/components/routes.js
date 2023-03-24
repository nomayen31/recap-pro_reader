import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";

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
        }
      ]
    }
  ])

export default router;