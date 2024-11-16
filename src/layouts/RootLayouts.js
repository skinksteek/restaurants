import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function RootLayout() {
  return (
    <div className="rootlayout" id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <Navbar />
      <main>
        <div id="page-wrap">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
