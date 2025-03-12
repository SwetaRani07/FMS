import React from "react";

const DetailsTab = () => {
    return (
        <div className="section">
            <div className="heading">
                <h2>Vehicle Details</h2>
            </div>
            <div className="d-flex">
                <div className="vehicle-image d-flex align-items-center">
                    <img src="/assets/tata-tempo.avif" width="350px" />
                </div>
                <table id="faultCodes" className="common-table ml-100" border="1">
                    <tbody>
                        <tr>
                            <td>Reg. No.</td>
                            <td></td>
                            <td>Owner</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td></td>
                            <td>Registration Date</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Make + Model</td>
                            <td></td>
                            <td>Insurance Provider</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td></td>
                            <td>Insurance No.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td></td>
                            <td>Insurance Exp. Date</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Fuel Type</td>
                            <td></td>
                            <td>PUC Certificate No.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Pay Load Capacity</td>
                            <td></td>
                            <td>PUC Expiry Date</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>VIN No.</td>
                            <td></td>
                            <td>Permits</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Engine No.</td>
                            <td></td>
                            <td>FASTag ID</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="heading mt-5">
                <h2>Driver Details</h2>
            </div>
            <div className="d-flex">
                <div className="driver-image d-flex align-items-center">
                    <img src="/assets/passport-size-photo.png" width="100px" />
                </div>
                <div className="driver-details-content">

                </div>
            </div>
        </div>
    );
};

export default DetailsTab;
