import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SignUpPage from './page/SignUpPage'
import Login from './page/LoginPage'
import { Navigate } from 'react-router-dom'
import Sidebar from './page/AdminDashboard/Sidebar'
import GridCard from './page/AdminDashboard/GridCard'
import Button from './components/Button'
import DeleteButton from './components/DeleteButton'
// import ProductCard from './components/ProductCard'
import ManageProducts from './page/ManageProduct'
import AddProduct from './page/AddProduct'
import InventoryManagement from './page/InventoryManagement'
import OrderTable from './page/OrderTable'
import CompanyTable from './page/CompanyTable'
import UserManagement from './page/UserManagement'
import { useState } from 'react'
function App() {

  
    const [products, setProducts] = useState([
      { name: 'Laptop', price: '999.99', stock: '50', company: 'TechCorp', category: 'Electronics' },
      { name: 'Smartphone', price: '499.99', stock: '100', company: 'MobiTech', category: 'Electronics' },
      { name: 'Headphones', price: '99.99', stock: '200', company: 'AudioPro', category: 'Audio' }
    ]);


  return (
    <>


      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />

        </Routes>
      // </BrowserRouter> */}
     {/* <div className="flex h-screen"> */}
        {/* <Sidebar /> */}
        {/* <GridCard /> */}
      {/* </div> */}
      {/* <Button /> */}
      {/* <DeleteButton /> */}
      {/* <ProductCard />  */}
      {/* <BrowserRouter>
      <Routes>
        {/* Redirect from "/" to "/manage-products" */}
        {/* <Route */}
          {/* path="/" */}
          {/* element={<Navigate to="/manage-products" />} */}
        {/* /> */}
        {/* <Route */}
          {/* path="/manage-products" */}
          {/* element={<ManageProducts products={products} setProducts={setProducts} />} */}
        {/* /> */}
        {/* <Route */}
          {/* // </>path="/add-product" */}
          {/* element={<AddProduct products={products} setProducts={setProducts} />} */}
        {/* /> */}
      {/* </Routes> */}
    {/* </BrowserRouter> */} 
    {/* <InventoryManagement /> */}
    {/* <OrderTable /> */}
    {/* <CompanyTable /> */}
    <UserManagement />
    </>
  )
}

export default App
