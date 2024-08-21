import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Root, RegButton} from './components'
import { HomePage, TestPage } from './pages'
import './tools/index.css'
import './components/svgs/buttons/buttons.scss'
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
        {
          path: '/test',
          element: <TestPage/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
