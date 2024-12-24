import mongoose from "mongoose";

const catSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

const Category = mongoose.model("Category", catSchema);

export default Category;
