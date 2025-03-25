import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Path/Login';


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Login />
      ),
    },
    {
      path: '/login', 
      element: (
        <Login />
      ),
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App