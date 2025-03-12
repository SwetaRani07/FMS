import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "./Login.css";

const LoginScreen = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        if (phone === "1234567890" && password === "test@123") {
            navigate("/dashboard", { replace: true });
        } else {
            setError("Invalid phone number or password");
        }
    };
    
    return(
        
        <div className="wrapper">
            <div class="login-block">
            <div className="fms-box">
                <h1 className="fms-h1">Fleet Monitoring System</h1>
            </div>
            <div className="form-box login">
                <form onSubmit={handleLogin}>
                    <h2>Login Details</h2>
                    <div className="input-box">
                        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        <FaUser className="login-icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <RiLockPasswordFill className="login-icon" />
                    </div>
                    <div className="submit-btn">
                        <button type="submit">Login</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                    <div className="forgot-password">
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/forgot-password"); }}>Forgot Password?</a>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default LoginScreen;