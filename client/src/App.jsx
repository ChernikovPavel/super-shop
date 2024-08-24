import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Rooot, RegButton } from './components';
import { HomePage, TestPage } from './pages';
import './tools/index.css';
import './components/buttons/buttons.scss';
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
          setUser((prev) => {
            return res.data.user;
          });
          setAccessToken(res.data.accessToken);
  
        })
        .catch('ОШИБКА В useEffect - ТОКЕН');
    })();
  }, []);


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rooot user={user} setUser={setUser}/>,
      children: [
        {
          path: '/',
          element: <HomePage user={user}/>,
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
