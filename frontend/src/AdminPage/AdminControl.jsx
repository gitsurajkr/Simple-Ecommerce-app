import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "../page/AdminDashboard/Sidebar";
import ManageProducts from "../page/AdminDashboard/ManageProduct";
import InventoryManagement from "../page/AdminDashboard/InventoryManagement";
import OrderTable from "../page/AdminDashboard/OrderTable";
import CompanyTable from "../page/AdminDashboard/CompanyTable";
import UserManagement from "../page/AdminDashboard/UserManagement";
import AddProduct from "../page/AdminDashboard/AddProduct";
function AdminControl() {
  const [products, setProducts] = useState([
    {
      name: "Laptop",
      price: "999.99",
      stock: "50",
      company: "TechCorp",
      category: "Electronics",
    },
    {
      name: "Smartphone",
      price: "499.99",
      stock: "100",
      company: "MobiTech",
      category: "Electronics",
    },
    {
      name: "Headphones",
      price: "99.99",
      stock: "200",
      company: "AudioPro",
      category: "Audio",
    },
  ]);

  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/dashboard" element={<Sidebar />} />
        <Route 
          path="/products" 
          element={<ManageProducts products={products} setProducts={setProducts} />} 
        />
        <Route path="/add-product" element={<AddProduct products={products} setProducts={setProducts} />} />
        <Route path="/manage-products" element={<ManageProducts products={products} setProducts={setProducts} />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/order" element={<OrderTable />} />
        <Route path="/company" element={<CompanyTable />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AdminControl;
