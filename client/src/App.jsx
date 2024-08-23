import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root, RegButton } from './components';
import { HomePage, TestPage } from './pages';
import './tools/index.css';
import './components/svgs/buttons/buttons.scss';
import axiosInstance, { setAccessToken } from './tools/axiosInstance';
import RegPage from './pages/AuthPages/RegPage';
import LogPage from './pages/AuthPages/LogPage';
function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      await axiosInstance
        .get('/api/token/refresh')
        .then((res) => {
          setUser(() => {
            res.data.user;
          });
          setAccessToken(res.data.accessToken);
        })
        .catch('ОШИБКА В useEffect - ТОКЕН');
    })();
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root user={user}/>,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/test',
          element: <TestPage />,
        },
        {
          element: <RegPage />,
          path: '/auth/reg',
        },
        {
          element: <LogPage />,
          path: '/auth/log',
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
