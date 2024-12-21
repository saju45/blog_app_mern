import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
const MainLayout = () => {
  return (
    <div className="px-12 md:px-32 lg:px-64">
      <Navbar />
      <main className="my-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
