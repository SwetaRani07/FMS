import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Default styles
import "react-date-range/dist/theme/default.css"; // Theme styles
import "./Dashboard.css";


const HangingComponent = ({onApply}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(""); 
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };

  const handleGoClick = () => {
    onApply(selectedOption, dateRange[0].startDate, dateRange[0].endDate);
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hanging-container ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleComponent}>
        {isOpen ? "❮❮" : "❯❯"}
      </button>
      
      <div className="content">
        {/* Radio Buttons */}
        <div className="radio-group tracking-radio-group">
          <label><input type="radio" name="tracking-radio" value="vehicle" /> Track Vehicle</label>
          <label><input type="radio" name="tracking-radio" value="fleet" /> Track Fleet</label>
        </div>

        {/* Select Fields */}
        <select>
          <option>Select Vehicle Group</option>
          <option>Vehicle Group 1</option>
          <option>Vehicle Group 2</option>
        </select>
        <select onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Select Vehicle</option>
          <option value="Vehicle 1">Vehicle 1</option>
          <option value="Vehicle 2">Vehicle 2</option>
        </select>

        {/* Date Range Picker */}
        <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
        />

        {/* Go Button */}
        <button className="go-btn" onClick={handleGoClick}>Go</button>
      </div>
    </div>
  );
};

export default HangingComponent;
