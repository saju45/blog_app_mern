import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../blog card/BlogCard";
const Favourites = () => {
  const [blogs, setBlogs] = useState([]);

  const backendLink = useSelector((state) => state.prod.link);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await axios.get(
          `${backendLink}/blog/getFavouriteBlogs`,
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        setBlogs(response.data.blogs);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavourites();
  }, [backendLink]);

  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">Fevaourites </h1>
      <div className="flex  flex-col gap-8 lg:gap-4">
        {blogs?.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col lg:flex-row gap-2 lg:gap-4"
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
