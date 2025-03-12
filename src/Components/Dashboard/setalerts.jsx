import React from "react";
import AppNavbar from "./Navbar";
import { Container } from "react-bootstrap";

const SetAlert = () => {
    return (
        <div>
            <AppNavbar /> {/* ✅ Add Navbar */}
            <Container className="mt-4">
                <h2>Welcome to Dashboard</h2>
            </Container>
        </div>
    );
};
export default SetAlert;