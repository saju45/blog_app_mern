import Category from "../model/categoryModel.js";

export const addCategory = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const categoryExists = await Category.findOne({ title });
    if (categoryExists) {
      return res.status(400).json({ error: "Category already exists" });
    }
    const newCategory = new Category({ title });
    await newCategory.save();
    res.status(200).json({
      success: true,
      message: "Category added successfully",
      category: newCategory,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ success: true, categories });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const getBlogByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id).populate("blogs");
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ success: true, blogs: category.blogs });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
