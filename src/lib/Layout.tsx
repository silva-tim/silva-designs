import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div className="flex flex-grow">
        <Footer />
      </div>
    </>
  );
}
