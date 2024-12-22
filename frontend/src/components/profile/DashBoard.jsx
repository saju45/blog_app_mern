import { useState } from "react";
import { FaUser } from "react-icons/fa";
const DashBoard = () => {
  const [changeAvater, setChangeAvater] = useState(null);

  const changeImage = (e) => {
    setChangeAvater(e.target.files[0]);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div>
          <div className="size-[20vh] border rounded-full">
            <label
              className=" w-[100%] h-[100%] flex items-center justify-center"
              htmlFor="imgFile"
            >
              {changeAvater ? (
                <img
                  src={URL.createObjectURL(changeAvater)}
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
            <button className="bg-blue-700 hover:bg-blue-600 transition-all duration-200 text-center px-4 py-2 text-white rounded">
              Change Avatar
            </button>
          </div>
        </div>
        <div>
          <p className="mt-2 text-zinc-600">shanawajsaju@gmail.com</p>
          <h2 className="text-2xl lg:text-5xl mt-2 font-semibold">
            Shanawaj hossain
          </h2>
        </div>
      </div>
      <hr className="my-8" />
      <div>
        <h1 className="text-2xl font-semibold">Change account's password</h1>
        <form action="" className="my-8">
          <div className="flex flex-col mt-4">
            <label className="block text-zinc-600 text-sm font-semibold mb-2">
              Current Pssword
            </label>
            <input
              type="password"
              name="password"
              className="w-full mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              placeholder="current password"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="block text-zinc-600 text-sm font-semibold mb-2">
              New Pssword
            </label>
            <input
              type="password"
              name="Newpassword"
              className="w-full mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              placeholder="New password"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="block text-zinc-600 text-sm font-semibold mb-2">
              Confirm new Pssword
            </label>
            <input
              type="password"
              name="confirmNewPassword"
              className="w-full mt-2 outline-none border px-3 py-2 rounded border-zinc-400"
              placeholder="Confirm new password"
            />
          </div>
          <div className="flex mt-8 ">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 transition-all duration-200 text-center px-4 py-2 text-white rounded"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashBoard;
