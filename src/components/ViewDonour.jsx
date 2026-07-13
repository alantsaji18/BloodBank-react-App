import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ViewDonour = () => {


const [data, changeData] = useState([]);

const fetchData = () => {
    axios.get("https://host-demo-app.onrender.com/api/donors")
        .then((response) => {
            console.log(response.data);
            changeData(response.data);
        })
        .catch((error) => {
            console.log(error);
            alert("Failed to fetch donors");
        });
}

useEffect(() => {
    fetchData();
}, []);

return (
    <div>


        <div className="container mt-4">
            <div className="row">
                <div className="col-12">

                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Donor Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Blood Group</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Weight (kg)</th>
                                <th>Last Donation</th>
                                <th>Created At</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.donor_name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.gender}</td>
                                        <td>{value.blood_group}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.email || "N/A"}</td>
                                        <td>{value.city}</td>
                                        <td>{value.weight_kg}</td>
                                        <td>{value.last_donation_date || "N/A"}</td>
                                        <td>{new Date(value.created_at).toLocaleString()}</td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    </div>
)


}

export default ViewDonour;
