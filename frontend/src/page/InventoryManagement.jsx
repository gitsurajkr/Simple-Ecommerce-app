import React from 'react';

const InventoryManagement = () => {
  const products = [
    { name: 'Laptop', stock: 50, reorderLevel: 20, status: 'In Stock' },
    { name: 'Smartphone', stock: 0, reorderLevel: 20, status: 'Out of Stock' }, // Out of stock example
    { name: 'Headphones', stock: 200, reorderLevel: 20, status: 'In Stock' },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Inventory Management</h2>
      
      <table className="table-auto w-full bg-white rounded-lg shadow">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3 text-left">Product</th>
            <th className="px-4 py-3 text-left">Current Stock</th>
            <th className="px-4 py-3 text-left">Reorder Level</th>
            <th className="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-3 text-gray-800">{product.name}</td>
              <td className="px-4 py-3">{product.stock}</td>
              <td className="px-4 py-3">{product.reorderLevel}</td>
              <td className="px-4 py-3">
                {product.stock > 0 ? (
                  <span className="bg-green-100 text-green-700 text-sm font-semibold py-1 px-3 rounded-full">
                    In Stock
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-700 text-sm font-semibold py-1 px-3 rounded-full">
                    Out of Stock
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagement;
