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
