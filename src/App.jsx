
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing';
import Gps from './pages/Gps';
import Solar from './pages/Solar';
import { Suspense } from 'react';
import Camera from './pages/Camera';

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
      },{
        path: '/camera',
        element: <Camera />,
      }

    ]
  );

  return (
    
    <RouterProvider router={router} />
  )
}

export default App
//    </Suspense> */
// <Suspense fallback={<div className='flex justify-center items-center text-7xl'>Loading...</div>}> */}
