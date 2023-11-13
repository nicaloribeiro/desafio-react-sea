import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css';
import EmptyMessage from './components/EmptyMessage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/*",
        element: <EmptyMessage message={"Em Breve"}/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </React.StrictMode>,
)
