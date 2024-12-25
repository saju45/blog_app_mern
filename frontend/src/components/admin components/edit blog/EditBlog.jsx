import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const EditBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const backendLink = useSelector((state) => state.prod.link);

  const handleDelete = async (blogId) => {
    try {
      const response = await axios.delete(
        `${backendLink}/admin/deleteBlog/${blogId}`,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);

      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete blog");
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${backendLink}/blog/getAllBlogs`);
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, [backendLink]);

  return (
    <div className="p-4 mt-4">
      <h1 className="text-xl font-semibold mb-4">Update Blogs </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 my-4">
        {blogs?.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 flex flex-col items-center justify-center "
          >
            <div className="w-full lg:w-2/6">
              <img
                src={item?.image}
                alt={item?.title}
                className="rounded object-cover"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-semibold">{item?.title}</h1>
              <p className="mb-4"> {item?.description.slice(0, 170)}... </p>
            </div>
            <div className="w-[100%] text-center flex items-center justify-between gap-4">
              <Link
                to={`/admin-dashboard/update-blog/${item._id}`}
                className="bg-blue-600 w-[100%] text-white rounded px-4 py-2"
              >
                Edit
              </Link>
              <button
                className="bg-red-600 w-[100%] text-white rounded px-4 py-2"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditBlog;
