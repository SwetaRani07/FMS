import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/LoginScreen/login';
import Dashboard from './Components/Dashboard/dashboard';
import ForgotPassword from "./Components/ForgotPassword/forgotpassword";
import VehicleManagement from "./Components/Dashboard/vehiclemanagement";
import SetAlerts from "./Components/Dashboard/setalerts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicle-management" element={<VehicleManagement />} />
        <Route path="/set-alerts" element={<SetAlerts />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
