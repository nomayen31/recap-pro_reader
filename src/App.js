import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Books from './components/Books'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Root from './components/Root'

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

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )



}

export default App



// 54