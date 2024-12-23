import { Link } from "react-router-dom";
const Sidebar = () => {
  const links = [
    { name: "Dashboard", to: "/admin-dashboard" },
    { name: "Add Blog", to: "/admin-dashboard/add-blog" },
    { name: "Edit Blog", to: "/admin-dashboard/edit-blog" },
    { name: "Users", to: "/admin-dashboard/users" },
    { name: "Blogs", to: "/admin-dashboard/blogs" },
    { name: "Categories", to: "/admin-dashboard/categories" },
  ];
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
        <button className="mt-5 bg-blue-700 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition-all duration-300">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
