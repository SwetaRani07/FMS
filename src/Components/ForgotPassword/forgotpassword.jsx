import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Forgot Password</h2>
      <p>Reset your password here.</p>
      <button onClick={() => navigate("/")}>Back to Login</button>
    </div>
  );
};

export default ForgotPassword;