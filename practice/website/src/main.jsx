import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './index.css';
import Header from './components/Header.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Header/>,
    children:[
      {
        path:"home",
        element:<Header/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
