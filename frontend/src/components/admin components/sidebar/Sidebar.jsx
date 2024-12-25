import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout } from "../../../store/auth";
const Sidebar = () => {
  const links = [
    { name: "Dashboard", to: "/admin-dashboard" },
    { name: "Add Blog", to: "/admin-dashboard/add-blog" },
    { name: "Edit Blog", to: "/admin-dashboard/edit-blog" },
    { name: "Users", to: "/admin-dashboard/users" },
    { name: "Blogs", to: "/admin-dashboard/blogs" },
    { name: "Categories", to: "/admin-dashboard/categories" },
  ];

  const navigate = useNavigate();

  const backendLink = useSelector((state) => state.prod.link);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${backendLink}/users/logout`,
        {},
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(logout());
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error("Failed to logout");
      console.error(error);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Admin page</h1>
      <hr className="my-4" />

      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <Link
            to={link.to}
            key={index}
            className="py-2 text-xl hover:scale-105 transition-all duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <button
          className="mt-5 bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition-all duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
