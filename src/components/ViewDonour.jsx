import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';

const ViewCourse = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response) => {
                changeData(response.data);

            })
            .catch()
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Fee</th>
                                    <th scope="col">Mode</th>
                                    <th scope="col">Trainer</th>
                                    <th scope="col">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.course_name}</td>
                                            <td>{value.duration}</td>
                                            <td>{value.fee}</td>
                                            <td>{value.mode}</td>
                                            <td>{value.trainer}</td>
                                            <td>{value.created_at}</td>
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCourse