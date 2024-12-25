import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../blog card/BlogCard";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const backendLink = useSelector((state) => state.prod.link);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backendLink}/blog/getRecentBlog`);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, [backendLink]);

  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">Recent Blogs </h1>
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

export default RecentBlogs;
