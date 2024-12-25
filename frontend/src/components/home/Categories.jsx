import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Categories = () => {
  const [categories, setCategories] = useState([]);

  const backendLink = useSelector((state) => state.prod.link);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${backendLink}/category/getCategories`, {
          withCredentials: true,
        });
        setCategories(res.data.categories);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, [backendLink]);

  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">Categories</h1>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {categories?.map((item, index) => (
          <Link
            key={index}
            to={`/cat/${item._id}`}
            className={`px-2 md:px-4 py-2 text-normal md:text-xl bg-yellow-100 font-semibold rounded`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
