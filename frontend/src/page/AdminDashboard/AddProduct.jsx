import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddProduct = ({ products, setProducts }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    stock: '',
    company: '',
    category: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, product]); // Add new product to the state
    navigate('/manage-products'); // Redirect to manage products page
  };

  return (
    <div className="container mx-auto p-4">
     
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <form className="bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Stock</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter stock quantity"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Company</label>
          <select
            name="company"
            value={product.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select company</option>
            <option value="TechCorp">TechCorp</option>
            <option value="MobiTech">MobiTech</option>
            <option value="AudioPro">AudioPro</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select category</option>
            <option value="Electronics">Electronics</option>
            <option value="Audio">Audio</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <button type="submit" className="bg-black text-white py-2 px-4 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
