import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="mb-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
