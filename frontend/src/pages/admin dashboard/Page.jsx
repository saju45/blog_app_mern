import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/admin components/sidebar/Sidebar";

const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transition-all duration-300
          ${showSidebar ? "w-2/4 sm:w-2/4 md:w-1/4 lg:w-1/6" : "w-0"}
          overflow-hidden lg:static lg:w-1/6 lg:block border-r`}
      >
        <div className="relative h-full ">
          {/* Close Button for Small Screens */}
          <div className="absolute top-4 right-4 lg:hidden">
            <button
              className="flex items-center gap-2 text-2xl"
              onClick={toggleSidebar}
            >
              <RxCross2 />
            </button>
          </div>
          <Sidebar />
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <div className="absolute top-4 left-4 lg:hidden z-30 ">
        {!showSidebar && (
          <button
            className="flex items-center gap-2 text-2xl"
            onClick={toggleSidebar}
          >
            <BsArrowRight />
          </button>
        )}
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 bg-zinc-200 transition-all duration-300 ${
          showSidebar ? "ml-3/4 sm:ml-2/4 md:ml-1/4 lg:ml-0" : "ml-0"
        } lg:ml-0`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
