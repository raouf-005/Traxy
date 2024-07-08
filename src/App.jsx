
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing';
import Gps from './pages/Gps';
import Solar from './pages/Solar';

function App() {


  const router = createBrowserRouter(
    [
      {
        path: '/*',
        element: <Landing />,
      },
      {
        path: '/gps',
        element: <Gps />,
      },{
        path: '/solar',
        element: <Solar />,
      }

    ]
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
