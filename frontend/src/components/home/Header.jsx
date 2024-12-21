import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="my-4 flex items-center justify-center flex-col">
      <div className="text-3xl flex flex-col w-full bg-zinc-100 items-start">
        <h1 className=" font-bold">Welcome to My App</h1>
        <p className="">Discover new blogs of technology and trends</p>
      </div>
      <div className="my-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/blog_img.avif"
            alt="hero_img"
            className="rounded w-full h-[30vh] md:h-[40vh] lg:h-[50vh] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">Lorem Ipsam</h1>
          <p className="mt-2 mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            officiis impedit aliquam, modi aut excepturi reprehenderit
            cupiditate tenetur placeat molestias delectus officia dicta ipsam ea
          </p>
          <Link
            to="/all-blogs"
            className="mt-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-4 px-2 rounded text-white"
          >
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
