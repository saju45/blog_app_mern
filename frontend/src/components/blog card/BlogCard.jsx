/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const BlogCard = ({ item }) => {
  return (
    <>
      <div className="w-full lg:w-2/6">
        <img
          src={item?.img}
          alt={item?.title}
          className="rounded object-cover"
        />
      </div>
      <div className="w-full lg:w-4/6">
        <h1 className="text-2xl font-semibold">{item?.title}</h1>
        <p className="mb-4"> {item?.description.slice(0, 170)}... </p>
        <Link
          to={`/blog/12`}
          className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
