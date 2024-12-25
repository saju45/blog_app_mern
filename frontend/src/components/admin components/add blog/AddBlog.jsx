import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState("");
  const backendLink = useSelector((state) => state.prod.link);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("categoryId", selectedCategory);
      const res = await axios.post(`${backendLink}/admin/addBlog`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
      toast.success(res.data.message);
      // reset form
      setTitle("");
      setDescription("");
      setImage(null);
      setCategoryTitle("");
      // navigate("/admin-dashboard");
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        `${backendLink}/category/addCategory`,
        { title: categoryTitle },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      toast.success(res.data.message);
      setCategoryTitle("");
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetching category data
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${backendLink}/category/getCategories`, {
          withCredentials: true,
        });
        setCategories(res.data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, [backendLink]);

  return (
    <div className="p-4 mt-4 h-screen">
      <h1 className="text-2xl font-semibold">Add Blog</h1>
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="file"
            className="bg-zinc-900 rounded text-white"
            accept=".jpeg, .jpg, .png"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <select
            name="title"
            id=""
            className="px-4 py-2 rounded shadow"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          {loading ? (
            <div className="bg-blue-400 w-fit text-white text-xl rounded px-4 py-2 shadow-xl">
              Adding blog....
            </div>
          ) : (
            <button className="bg-blue-600 text-white text-xl rounded px-4 py-2 shadow-xl hover:bg-blue-700 transition-all duration-300">
              Add Blog
            </button>
          )}
        </div>
      </form>

      <h1 className=" mt-8 text-xl font-semibold">Add Category</h1>
      <form
        className="my-4 flex flex-row gap-2 mx-2"
        onSubmit={handleCategorySubmit}
      >
        <input
          type="text"
          id="categoryTitle"
          name="categoryTitle"
          className="w-4/6 o px-4 py-2 bg-transparent text-xl  border-zinc-400 "
          required
          placeholder="Category title"
          value={categoryTitle}
          onChange={(e) => setCategoryTitle(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className=" bg-blue-600 text-white  rounded px-4 py-2  hover:bg-blue-700 transition-all duration-300"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
