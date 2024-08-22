import { useEffect, useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Root, RegButton} from './components'
import { HomePage, TestPage } from './pages'
import './tools/index.css'
import './components/svgs/buttons/buttons.scss'
import axiosInstance, { setAccessToken } from './tools/axiosInstance'
function App() {

const [hookedUser, hookUser] = useState()

useEffect(()=> {
  axiosInstance({
    method: 'get',
    url: 'http://localhost:3000/api/token/refresh'
  }
  ).then((res) => {hookUser(res.data.user), setAccessToken(res.data.acc)})
}, [])

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
