import BlogCard from "../../components/blog card/BlogCard";
const AllBlogs = () => {
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
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">All Blogs </h1>
      <div className="flex  flex-col gap-8 lg:gap-4">
        {data?.map((item, i) => (
          <div key={i} className="flex flex-col lg:flex-row gap-2 lg:gap-4">
            <BlogCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
