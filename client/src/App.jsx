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

  const [user, setUser] = useState({ });
  useEffect(() => {
    console.log('user в начале useEffect', user);

    (async () => {
      await axiosInstance
        .get('/api/token/refresh')
        .then((res) => {
          setUser((prev) => {
            console.log('prev inside setUSer', prev);
            return res.data.user;
          });
          setAccessToken(res.data.accessToken);
          console.log('axios', res.data.user);
          console.log('user', user);
        })
        .catch('ОШИБКА В useEffect - ТОКЕН');
    })();
  }, []);


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root user={user} setUser={setUser}/>,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/test',
          element: <TestPage user={user} />,
        },
        {
          path: '/auth/reg',
          element: <RegPage setUser={setUser} />,
        },
        {
          path: '/auth/log',
          element: <LogPage setUser={setUser} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
