import axios from "axios";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ChangePasswordForm from "./ChangePasswordForm";
const DashBoard = () => {
  const [user, setUser] = useState({});
  const [changeAvater, setChangeAvater] = useState(null);
  const backendLink = useSelector((state) => state.prod.link);

  const changeImage = (e) => {
    setChangeAvater(e.target.files[0]);
  };

  const uploadProfilePic = async () => {
    const formData = new FormData();
    console.log("changeAvater : ", changeAvater);

    formData.append("image", changeAvater);

    try {
      const response = await axios.put(
        `${backendLink}/users/changeAvatar`,
        formData,
        {
          withCredentials: true,
        }
      );
      setUser({ ...user, avatar: response.data.user.avatar });
      toast.success(response.data.message);

      setChangeAvater(null);
    } catch (error) {
      console.error(error);
      console.log(error);
      toast.error("Failed to upload image");
    }
  };

  useEffect(() => {
    const fechUserInfo = async () => {
      try {
        const response = await axios.get(
          `${backendLink}/users/getProfileData`,
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fechUserInfo();
  }, [backendLink]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div>
          <div className="size-[20vh] border rounded-full">
            <label
              className=" w-[100%] h-[100%] flex items-center justify-center"
              htmlFor="imgFile"
            >
              {user && user.avatar ? (
                <img
                  src={
                    changeAvater
                      ? URL.createObjectURL(changeAvater)
                      : `${user.avatar}`
                  }
                  alt="profile_img"
                  className="size-[100%] object-cover rounded-full"
                />
              ) : (
                <FaUser className="size-[12vh] text-zinc-600" />
              )}
            </label>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <input
              type="file"
              accept=" .jpeg, .jpg, .png "
              id="imgFile"
              className="mb-4 bg-zinc-900 text-white hidden"
              onChange={changeImage}
            />
            <button
              className="bg-blue-700 hover:bg-blue-600 transition-all duration-200 text-center px-4 py-2 text-white rounded"
              onClick={uploadProfilePic}
            >
              Change Avatar
            </button>
          </div>
        </div>
        <div>
          <p className="mt-2 text-zinc-600">{user?.email}</p>
          <h2 className="text-2xl lg:text-5xl mt-2 font-semibold">
            {user?.name}
          </h2>
        </div>
      </div>
      <hr className="my-8" />
      <ChangePasswordForm />
    </div>
  );
};

export default DashBoard;
