import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import User from './components/User/User'
import './index.css';
import Layout from './Layout';
import Github from './components/Github/Github';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"user/:userId",
        element:<User />
      },
      {
        path:"github",
        element:<Github/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
