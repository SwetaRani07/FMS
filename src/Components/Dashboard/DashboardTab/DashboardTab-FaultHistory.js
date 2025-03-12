import React from "react";

const FaultHistoryTab = () => {
    return (
        <div className="section">
            <div className="heading">
                <h2>Fault Codes</h2>
            </div>
            <div className="display-cards">
                <p>Fault Codes: 3</p>
                <p>P0704</p>
                <p>P0506</p>
                <p>P0908</p>
            </div>
            <table id="faultCodes" className="common-table" border="1">
                <thead>
                    <tr>
                        <th>Fault Code</th>
                        <th>First Occurence</th>
                        <th>Days since First Occurence</th>
                        <th>Distance since First Occurence</th>
                        <th>Location</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>P0704</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>P0506</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>P0908</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className="heading mt-5">
                <h2>Triggers</h2>
            </div>
        </div>
    );
};

export default FaultHistoryTab;
