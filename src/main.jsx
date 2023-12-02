import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';

import Home from './routes/Home';
import NewEvent from './routes/NewEvent';
import SearchEvent from './routes/SearchEvent';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <SearchEvent />,
      },
      {
        path: '/new',
        element: <NewEvent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
