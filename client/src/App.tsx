import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/buyer/profile" element={<BuyerDashboard/>} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App
