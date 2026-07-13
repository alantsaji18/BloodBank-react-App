import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const InsertCourse = () => {

    const [input, changeInput] = useState(
        {

            donor_name: " ",
            age: " ",
            gender: " ",
            blood_group: " ",
            phone: "",
            email: "",
            city: "",
            weight_kg: "",
            last_donation_data: "",
        }
    )

    const inputHandler = (event)=>{

        changeInput({...input,[event.target.name]:event.target.value})

    }


        const readValue=() =>{

            console.log(input)

            axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(
                (response)=>{

                    console.log(response.data)

                    alert("Couse Added Successfully")

                }
            ).catch()

        }

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col- col-12 col-sm-16 col-md-6 col-lg-6 col-xl-4 col-xxl-4 justify-content-center">

                        <div className="row g-3">
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Donor name</label>
                                <input type="text" className="form-control"  name='donor_name' value={input.donor_name} onChange={inputHandler}/>

                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name='age' value={input.age} onChange={inputHandler} />


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Gender</label>
                                <input type="phone" className="form-control" name='gender' value={input.gender} onChange={inputHandler} />


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Blood Group</label>
                                <input type="phone" className="form-control" name='blood_group' value={input.blood_group} onChange={inputHandler} />

                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>


                            </div>
                             <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>


                            </div>
                             <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">City</label>
                                <input type="text" className="form-control" name='city' value={input.city} onChange={inputHandler}/>


                            </div>
                             <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text" className="form-control" name='weight_kg' value={input.weight_kg} onChange={inputHandler}/>


                            </div>
                             <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Last Donation</label>
                                <input type="text" className="form-control" name='last_donation_data' value={input.last_donation_data} onChange={inputHandler}/>


                            </div>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
export default AddDonour