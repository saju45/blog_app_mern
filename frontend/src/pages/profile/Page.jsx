import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/profile/Sidebar";

const Profile = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  console.log(showSidebar);

  return (
    <div className="relative mb-4 py-4 flex items-start justify-between gap-8">
      <div
        className={` bg-white ${
          showSidebar
            ? "text-2xl h-screen fixed top-0 left-0 w-[70%] "
            : "hidden"
        }  lg:text-normal lg:h-auto lg:block  flex flex-col items-center justify-center p-4 lg:p-0 border-r lg:relative lg:w-1/6 z-10`}
      >
        <div className="absolute top-8 right-8 lg:hidden">
          <button
            className="flex items-center justify-end gap-4 text-2xl"
            onClick={toggleSidebar}
          >
            <RxCross2 />
          </button>
        </div>
        <Sidebar />
      </div>
      <div className="absolute top-0 left-0 lg:hidden z-2">
        <button
          className="flex items-center justify-end gap-4 text-2xl"
          onClick={toggleSidebar}
        >
          <BsArrowRight />
        </button>
      </div>
      <div className="w-full lg:w-5/6 max-h-auto min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
