import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../store/auth";
const AdminLogin = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const backendLink = useSelector((state) => state.prod.link);
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${backendLink}/admin/adminLogin`,
        inputs,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(login());
      toast.success(response.data.message);
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);

      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" w-[80%] md:w-[60%] lg:w-[40%] p-12 shadow-2xl rounded flex flex-col items-center justify-center">
        <div className="text-2xl flex flex-col lg:flex-row gap-2 text-center">
          <h1 className="font-bold">Admin Login!</h1>
          <span>Please login here</span>
        </div>
        <form className="flex flex-col w-[100%] mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              required
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              required
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex mt-4 ">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-2 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
