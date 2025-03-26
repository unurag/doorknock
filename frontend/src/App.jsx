import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Path/Login';
import Home from './Path/Home/Home';


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
    },
    {
      path: '/home',
      element: (
        <Home />
      ),
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App