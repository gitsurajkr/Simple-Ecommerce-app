import React, { useState } from 'react';

// Modal Component for Adding a Company
const AddCompanyModal = ({ isOpen, onClose, onAddCompany }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState('');
  const [revenue, setRevenue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCompany({ name, category, products: parseInt(products, 10), revenue: `$${parseInt(revenue, 10).toLocaleString()}` });
    setName('');
    setCategory('');
    setProducts('');
    setRevenue('');
    onClose(); // Close the modal after submitting
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Add New Company</h2>
          <button onClick={onClose} className="text-xl">&times;</button>
        </div>
        <p className="mt-2 text-gray-600">Enter the details of the new company below.</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter company category"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Products</label>
            <input
              type="number"
              value={products}
              onChange={(e) => setProducts(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter number of products"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Revenue</label>
            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter company revenue"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-800"
            >
              Add Company
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Component with Table and Modal
const CompanyTableWithModal = () => {
  const [companies, setCompanies] = useState([
    { name: 'TechCorp', products: 5, revenue: '$50,000', category: 'Electronics' },
    { name: 'MobiTech', products: 3, revenue: '$30,000', category: 'Mobile' },
    { name: 'AudioPro', products: 2, revenue: '$20,000', category: 'Audio' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCompany = (newCompany) => {
    setCompanies([...companies, newCompany]);
  };

  

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Companies</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2"
        >
          <span className="text-lg">+</span>
          <span>Add Company</span>
        </button>
      </div>
      <div className="overflow-hidden border rounded-lg shadow-sm">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left p-4 bg-gray-100">Name</th>
              <th className="text-left p-4 bg-gray-100">Products</th>
              <th className="text-left p-4 bg-gray-100">Revenue</th>
              <th className="text-left p-4 bg-gray-100">Category</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{company.name}</td>
                <td className="p-4">{company.products}</td>
                <td className="p-4">{company.revenue}</td>
                <td className="p-4">{company.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddCompanyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCompany={handleAddCompany}
      />
    </div>
  );
};

export default CompanyTableWithModal;
