import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const backendLink = useSelector((state) => state.prod.link);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      if (image) {
        formData.append("image", image);
      }
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      };
      const response = await axios.put(
        `${backendLink}/admin/updateBlog/${id}`,
        formData,
        config
      );
      toast.success(response.data.message);
      navigate("/admin-dashboard/edit-blog");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update blog");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendLink}/blog/getBlog/${id}`, {
          withCredentials: true,
        });
        setTitle(response.data.blog.title);
        setDescription(response.data.blog.description);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [backendLink, id]);

  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-semibold">Update Blog</h1>
      <form className="my-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          className=" outline-none p-4 bg-transparent text-3xl border-b border-zinc-400 font-semibold w-full"
          required
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          id="description"
          name="description"
          className=" outline-none p-4 bg-transparent text-xl border-b border-zinc-400 font-semibold w-full"
          required
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <input
            type="file"
            className="bg-zinc-900 rounded text-white"
            accept=".jpeg, .jpg, .png"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div>
          <button className="bg-blue-600 text-white text-xl rounded px-4 py-2 shadow-xl hover:bg-blue-700 transition-all duration-300">
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
