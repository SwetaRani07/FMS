import React, {useState} from "react";
import LiveLocation from "./LiveLocation.js";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { IoMdTrain } from "react-icons/io";

const LiveTab = () => {
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
	const intervalId = setInterval(() => {
		setSeconds(prevSeconds => prevSeconds + 1);
	},1000);
	
	return () => clearInterval(intervalId);
    },[]);

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const remainingSeconds = time % 60;
        return `${minutes} minutes ${remainingSeconds} seconds`
    };

    return (
        <div className="section">
            <div className="heading">
                <h2>Ongoing Trip</h2>
                <p><strong>Last Refresh:</strong> {formatTime(seconds)} ago; Date Time</p>
            </div>
            <table id="ongoingTrip" className="ongoing-trip common-table" border="1">
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>Start Location</th>
                        <th>Distance</th>
                        <th>Duration</th>
                        <th>Max Speed</th>
                        <th>Avg Speed</th>
                        <th>Max Coolant Temp</th>
                        <th>Avg Coolant Temp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10:00 AM</td>
                        <td>BLR</td>
                        <td>10kms</td>
                        <td>10hrs</td>
                        <td>100km/hr</td>
                        <td>50km/hr</td>
                        <td>--</td>
                        <td>--</td>
                    </tr>
                </tbody>
            </table>
            <div className="heading mt-5">
                <h2>Live Status</h2>
                <p>Last Update: 10 mins ago</p>
                <p>Delay: 13 seconds</p>
                <p>Server Time: HH:MM:SS DD:MM:YYYY</p>
                <p>Timestamp: HH:MM:SS DD:MM:YYYY</p>
            </div>
            <div className="display-cards">
                <p>Vehicle Speed: 30kmph</p>
                <p>Engine Speed: 5500 RPM</p>
                <p>Coolant Temp: 90 &#xb0;C</p>
                <p>Battery Voltage: 14.2V</p>
                <p>Fuel Level: 40%</p>
            </div>
            <div className="live-location mt-5">
                <div className="liveLocationMap">
                    <LiveLocation />
                </div>
                <div className="liveLocationContent">
                    <p>Temperature: 23&#xb0;C</p>
                    <p>Atm Pressure: 98 kPa</p>
                    <p>Altitude: 550 MSL</p>
                    <p>Location: Place, City, State</p>
                </div>
            </div>
            <div className="heading mt-5">
                <h2>Nearby</h2>
            </div>
            <div className="nearby-block">
                <div className="d-flex">
                    <div className="nearby-icons">
                        <MdOutlineFlightTakeoff />
                    </div>
                    <div className="nearby-content">
                        Jay Prakash Narayan International Airport
                        <span>38 kms away</span>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="nearby-icons">
                        <IoMdTrain />
                    </div>
                    <div className="nearby-content">
                        Patna Junction
                        <span>18 kms away</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveTab;