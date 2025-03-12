import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppNavbar = () => {
    const navigate = useNavigate();

    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => navigate("/dashboard")} style={{ cursor: "pointer" }}>
                    Fleet Monitoring System
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => navigate("/dashboard")}>Dashboard</Nav.Link>
                        <Nav.Link onClick={() => navigate("/vehicle-management")}>Vehicle & Driver Management</Nav.Link>
                        <Nav.Link onClick={() => navigate("/set-alerts")}>Set Alerts</Nav.Link>
                        <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
                        <Nav.Link onClick={() => navigate("/")}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
