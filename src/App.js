import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import RootLayout from "./layouts/RootLayouts";

import "./assets/styles/App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} />
      <Route path="/meny" element={<Menu />} />
      <Route path="/kontakt" element={<Contact />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
