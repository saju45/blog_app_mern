/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {
  return (
    <>
      <div className="w-full lg:w-2/6">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="rounded object-cover"
        />
      </div>
      <div className="w-full lg:w-4/6">
        <h1 className="text-2xl font-semibold">{blog?.title}</h1>
        <p className="mb-4"> {blog?.description.slice(0, 150)}... </p>
        <Link
          to={`/blog/${blog._id}`}
          className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
