import { Link } from "react-router-dom";
const EditBlog = () => {
  const data = [
    {
      title: "New Mobile App Release",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release2",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release3",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release2",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release3",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release2",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release3",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release2",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
    {
      title: "New Mobile App Release3",
      img: "/blog_img.avif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime veniam ad maiores sint sapiente distinctio nesciunt fugiat perferendis, odit et.",
    },
  ];
  return (
    <div className="p-4 mt-4">
      <h1 className="text-xl font-semibold mb-4">Update Blogs </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 my-4">
        {data?.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-4 flex flex-col items-center justify-center "
          >
            <div className="w-full lg:w-2/6">
              <img
                src={item?.img}
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
                to="/admin-dashboard/update-blog/12"
                className="bg-blue-600 w-[100%] text-white rounded px-4 py-2"
              >
                Edit
              </Link>
              <button className="bg-red-600 w-[100%] text-white rounded px-4 py-2">
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
