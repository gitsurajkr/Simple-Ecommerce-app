import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SignUpPage from './page/SignUpPage'
import Login from './page/LoginPage'
import { Navigate } from 'react-router-dom'
import Sidebar from './page/AdminDashboard/Sidebar'
import GridCard from './page/AdminDashboard/GridCard'
import Button from './components/Button'
import DeleteButton from './components/DeleteButton'

function App() {
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
      <DeleteButton />
    </>
  )
}

export default App
