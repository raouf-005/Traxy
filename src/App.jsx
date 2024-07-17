
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
        errorElement: <div>404 Not Found</div>
      },
      {
        path: '/gps',
        element: <Gps />,
        errorElement: <div>404 Not Found</div>
      },{
        path: '/solar',
        element: <Solar />,
        errorElement: <div>404 Not Found</div>
      },{
        path: '/camera',
        element: <Camera />,
        errorElement: <div>404 Not Found</div>
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
