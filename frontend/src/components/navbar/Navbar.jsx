import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "AllBlogs", to: "/all-blogs" },
    { name: "Profile", to: "/profile" },
    { name: "Login", to: "/login" },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [mobileNav, setMobileNav] = useState(false);

  if (!isLoggedIn) {
    links.splice(2, 1);
  } else {
    links.splice(3, 1);
  }

  return (
    <nav className=" relative flex items-center justify-between py-4 border-b border-zinc-200">
      <div className=" w-3/6 lg:w-2/6 brandName">
        <Link to="/" className="text-xl font-semibold">
          BlogApp
        </Link>
      </div>
      <div className="w-4/6 hidden lg:flex items-center justify-end gap-2">
        {links.map((link, index) => (
          <Link
            className="ms-4 hover:text-blue-600 transition-all duration-300"
            key={index}
            to={link.to}
          >
            {link.name}
          </Link>
        ))}
        {!isLoggedIn && (
          <Link
            to="/signup"
            className="bg-black px-4 py-1 text-zinc-100  rounded hover:bg-blue-600 transition-all duration-300"
          >
            SignUp
          </Link>
        )}
      </div>

      <div className="w-3/6 flex lg:hidden items-center justify-end gap-2">
        <button className="text-3xl" onClick={() => setMobileNav(!mobileNav)}>
          <IoReorderThreeOutline />
        </button>
      </div>
      <div
        className={`fixed  top-0 left-0 nav-bg bg-green-500 h-screen w-full backdrop-blur-md p-8 ${
          mobileNav
            ? "translate-y-[0%] flex flex-col z-20"
            : "translate-y-[-100%]"
        }  transition-all duration-300 `}
      >
        <div className="w-full flex justify-end ">
          <button onClick={() => setMobileNav(!mobileNav)} className="text-3xl">
            <AiOutlineClose />
          </button>
        </div>

        <div className="h-[100%] flex flex-col items-center justify-center">
          {links.map((link, index) => (
            <Link
              className="mb-8 text-3xl hover:text-blue-600 transition-all duration-300"
              key={index}
              to={link.to}
            >
              {link.name}
            </Link>
          ))}

          {!isLoggedIn && (
            <Link
              to="/signup"
              className="bg-black text-3xl px-6 py-3 text-zinc-100  rounded hover:bg-blue-600 transition-all duration-300"
            >
              SignUp
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
