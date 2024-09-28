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

const showAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: error.errors ? error.errors : "Validation failed." });
    }
}

const showProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: error.errors ? error.errors : "Validation failed." });
    }
}

const updateProduct = async (req, res) => {
    try {
        const productExist = await Product.findById(req.params.id);
        if (!productExist) {
            res.status(404).json({ message: "Product not found" });
        }
        productExist.company = req.body.company || productExist.company;
        productExist.name = req.body.name || productExist.name;
        productExist.price = req.body.price || productExist.price;
        productExist.description = req.body.description || productExist.description;
        productExist.countInStock = req.body.countInStock || productExist.countInStock;
        productExist.imageUrl = req.body.imageUrl || productExist.imageUrl;
        productExist.category = req.body.category || productExist.category;
        await productExist.save();
        res.status(200).json(productExist);
    }
    catch (error) {
        res.status(400).json({ message: error.errors ? error.errors : "Validation failed." });
    }
}

const showProductByCategory = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).json({ message: error.errors ? error.errors : "Validation failed." });
    }
}

const showProductByCompany = async (req, res) => {
    try {
        const products = await Product.find({ company: req.params.company });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).json({ message: error.errors ? error.errors : "Validation failed." });
    }
}

const showProductByPrice = async (req, res) => {
    try {
        const products = await Product.find({ price: req.params.price });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).json({ message: error.errors ? error.errors : "Validation failed." });
    }
}

const filterProduct = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category, company: req.params.company, price: req.params.price });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).json({ message: error.errors ? error.errors : "Validation failed." });
    }
}

module.exports = { addProduct, removeProduct, showAllProducts, showProduct, updateProduct, showProductByCategory, showProductByCompany, showProductByPrice, filterProduct };


