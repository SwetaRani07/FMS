import React, { useState } from "react";
import LiveTab from "./DashboardTab/DashboardTab-Live";
import SummaryTab from "./DashboardTab/DashboardTab-Summary";
import TripsTab from "./DashboardTab/DashboardTab-Trips";
import FaultHistoryTab from "./DashboardTab/DashboardTab-FaultHistory";
import DetailsTab from "./DashboardTab/DashboardTab-Details";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Live");

    const tabs = [
        { name: "Live", component: <LiveTab /> },
        { name: "Summary", component: <SummaryTab /> },
        { name: "Trips", component: <TripsTab /> },
        { name: "Fault History & Trigger", component: <FaultHistoryTab /> },
        { name: "Details", component: <DetailsTab /> },
    ];

    return (
        <div className="dashboard-block">
            {/* Tab Navigation */}
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        className={activeTab === tab.name ? "tab active" : "tab"}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Render Active Tab Component */}
            <div className="tab-content">
                {tabs.find((tab) => tab.name === activeTab)?.component}
            </div>
        </div>
    );
};

export default Tabs;
