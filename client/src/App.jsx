import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Root} from './components'
import { HomePage } from './pages'
import './tools/index.css'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
