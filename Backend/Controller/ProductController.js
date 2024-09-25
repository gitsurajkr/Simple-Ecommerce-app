const express = require("express");
const app = express();
app.use(express.json());
const Product = require("../Model/ProductSchema");



const addProduct = async (req, res) => {
  try {
    const {
      company,
      name,
      price,
      description,
      countInStock,
      imageUrl,
      category,
    } = req.body;

    const productExist = await Product.findOne({ name });

    if (productExist) {
      res.status(400).json({ message: "Product already exists" });
    }

    const newProduct = new Product({
      company,
      name,
      price,
      description,
      countInStock,
      imageUrl,
      category,
    });

    await newProduct.save();
    res.status(201).json({
      _id: newProduct._id,
      company: newProduct.company,
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
      countInStock: newProduct.countInStock,
      imageUrl: newProduct.imageUrl,
      category: newProduct.category,
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: error.errors ? error.errors : "Validation failed." });
  }
};

const removeProduct = async (req, res) => {
    try {
        const productExist = await Product.findById(req.params.id);
        if (!productExist) {
            res.status(404).json({ message: "Product not found" });
        }
        await productExist.remove();
        res.status(200).json({ message: "Product removed" });

    }catch(error){
        res.status(400).json({ message: error.errors ? error.errors : "Validation failed." });
    }
}