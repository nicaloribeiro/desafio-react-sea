import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import EmptyMessage from "./components/EmptyMessage/index.jsx";
import EditPage from "./pages/Edit/index.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/edit",
        element: <EditPage />,
      },
      {
        path: "*",
        element: <EmptyMessage message={"Em Breve"} />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
