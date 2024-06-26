import { BrowserRouter, Routes, Route } from "react-router-dom";
import TruckInfo from "@pages/dashboard/TruckInfo";
import Drivers from "@pages/dashboard/Drivers";
import Trucks from "@pages/dashboard/Trucks";
import Register from "@pages/auth/Register";
import Login from "@pages/auth/Login";
import Home from "@pages/home/Home";
import DriverInfo from "@pages/dashboard/DriverInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Drivers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/trucks" element={<Trucks />} />
        <Route path="/dashboard/driver-info" element={<DriverInfo />} />
        <Route path="/dashboard/truck-info" element={<TruckInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
