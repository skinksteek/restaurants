import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Find from "./pages/Find";

import RootLayout from "./layouts/RootLayouts";

import "./assets/styles/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "meny", element: <Menu /> },
      { path: "kontakt", element: <Contact /> },
      { path: "hittahit", element: <Find /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
