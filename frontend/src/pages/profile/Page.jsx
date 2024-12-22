import { Outlet } from "react-router-dom";
import Sidebar from "../../components/profile/Sidebar";

const Profile = () => {
  return (
    <div className="mb-4 py-4 flex items-start justify-between gap-8">
      {/* <h1 className="text-xl font-semibold mb-4">Profile </h1> */}
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6 max-h-auto min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
