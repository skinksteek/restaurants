import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Menu from "./routes/menu";
import ErrorPage from "./error-page";
import "./assets/styles/index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "kontakt/",
    element: <Contact />,
  },
  {
    path: "meny/",
    element: <Menu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
