import React from "react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const barData = [
  { name: "Jan", sales: 10 },
  { name: "Feb", sales: 20 },
  { name: "Mar", sales: 30 }
];

const areaData = [
    { name: "Jan", revenue: 30 },
    { name: "Feb", revenue: 50 },
    { name: "Mar", revenue: 40 },
    { name: "Apr", revenue: 70 },
    { name: "May", revenue: 90 }
  ];

const SummaryTab = () => {
    return (
        <div className="section">
            <div className="heading">
                <h2>Overall Summary</h2>
            </div>
            <div className="d-flex">
                <div className="display-cards cards-wrap">
                    <p>Distance: 54km</p>
                    <p>Duration: 2 hours</p>
                    <p>Average Speed: 27 kmph</p>
                    <p>Idle Duration: 14 mins</p>
                    <p>Battery Voltage: 12.39V</p>
                    <p>No. of trips: 12</p>
                </div>
                <table id="overallSummary" className="overall-summary common-table" border="1">
                    <thead>
                        <tr>
                            <th>Parameters</th>
                            <th>Max</th>
                            <th>Avg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vehicle Speed</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Engine Speed</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Engine Temp</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Oil Pressure</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-evenly my-5">
                <BarChart width={400} height={300} data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="sales" fill="#82ca9d" />
                </BarChart>
                <AreaChart width={500} height={300} data={areaData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
            <div className="heading">
                <h2>Daywise Summary</h2>
            </div>
            <table id="daywiseSummary" className="common-table" border="1">
                    <thead>
                        <tr>
                            <th>No. of Trips</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Start Location</th>
                            <th>End Location</th>
                            <th>Distance</th>
                            <th>Duration</th>
                            <th>Avg Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
};

export default SummaryTab;