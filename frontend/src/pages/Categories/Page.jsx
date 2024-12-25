import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogCard from "../../components/blog card/BlogCard";
const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const backendLink = useSelector((state) => state.prod.link);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendLink}/category/getBlogByCategory/${id}`
        );
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [backendLink, id]);

  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">All Blogs </h1>
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

export default Page;
