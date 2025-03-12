import React, { useState } from "react";
import AppNavbar from "./Navbar";
import { Container } from "react-bootstrap";
import HangingComponent from "./HangingPanel";
import DashboardTabs from "./DashboardTab";

const Dashboard = () => {
    const [heading, setHeading] = useState("Dashboard"); // Heading initially set as Dashboard
    const [showTabs, setShowTabs] = useState(false);  // Tabs are hidden initially

    const handleApply = (selectedOption, startDate, endDate) => {
        if (selectedOption && startDate && endDate) {
            const formattedStartDate = startDate.toLocaleDateString();
            const formattedEndDate = endDate.toLocaleDateString();
            setHeading(`${selectedOption} - ${formattedStartDate} to ${formattedEndDate}`);
            setShowTabs(true); // Show tabs after clicking Go
        }
    };

    return (
        <div>
            <AppNavbar /> {/* Navbar */}
            <Container className="mt-4">
            {/* Dynamic Heading */}
            <h1>{heading}</h1>
            {/* Show Tabs Only After Clicking Go */}
            {showTabs && <DashboardTabs />}
            </Container>

            {/* Hanging Component */}
            <HangingComponent onApply={handleApply} />

            
        </div>
    );
};
export default Dashboard;