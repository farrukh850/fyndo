import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/css/main.css";

const Layout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <div className="layout">
      {showHeader && <Header />}
      <main className="main-content mt-[60px]">
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;