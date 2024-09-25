import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProducts = ({ products, setProducts }) => {
  const navigate = useNavigate();

  // Delete product function
  const handleDelete = (productName) => {
    const updatedProducts = products.filter((product) => product.name !== productName);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">Manage Products</h2>
        <button
          className="bg-black text-white py-2 px-4 rounded flex items-center hover:bg-gray-800 transition"
          onClick={() => navigate('/add-product')}
        >
          <span className="mr-2 text-lg">+</span> Add Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr className="text-left">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-3">{product.name}</td>
                <td className="px-4 py-3">${product.price}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">{product.company}</td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(product.name)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
