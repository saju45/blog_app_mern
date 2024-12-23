const AddBlog = () => {
  return (
    <div className="p-4 mt-4 h-screen">
      <h1 className="text-2xl font-semibold">Add Blog</h1>
      <form className="my-4 flex flex-col gap-4">
        <input
          type="text"
          id="title"
          name="title"
          className=" outline-none p-4 bg-transparent text-3xl border-b border-zinc-400 font-semibold w-full"
          required
          placeholder="Title"
        />
        <textarea
          type="text"
          id="description"
          name="description"
          className=" outline-none p-4 bg-transparent text-xl border-b border-zinc-400 font-semibold w-full"
          required
          placeholder="description"
        />
        <div>
          <input
            type="file"
            className="bg-zinc-900 rounded text-white"
            accept=".jpeg, .jpg, .png"
          />
        </div>
        <div>
          <button className="bg-blue-600 text-white text-xl rounded px-4 py-2 shadow-xl hover:bg-blue-700 transition-all duration-300">
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
