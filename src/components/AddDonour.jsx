import React, { useState } from 'react'
import axios from 'axios'

const AddDonour = () => {


const [input, changeInput] = useState({
    donor_name: "",
    age: "",
    gender: "",
    blood_group: "",
    phone: "",
    email: "",
    city: "",
    weight_kg: "",
    last_donation_date: ""
})

const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value })
}

const readValue = () => {

    const formattedInput = {
        ...input,
        age: Number(input.age),
        weight_kg: Number(input.weight_kg)
    }

    console.log(formattedInput)

    axios.post("https://host-demo-app.onrender.com/api/add-donor", formattedInput)
        .then((response) => {
            console.log(response.data)
            alert("Donor Added Successfully")

            // Optional: Clear form after submit
            changeInput({
                donor_name: "",
                age: "",
                gender: "",
                blood_group: "",
                phone: "",
                email: "",
                city: "",
                weight_kg: "",
                last_donation_date: ""
            })
        })
        .catch((error) => {
            console.log(error.response?.data)
            alert(error.response?.data?.message || "Something went wrong")
        })
}

return (
    <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-5">

                    <div className="row g-3">

                        <div className="col-12">
                            <label className="form-label">Donor Name</label>
                            <input type="text" className="form-control"
                                name='donor_name'
                                value={input.donor_name}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Age</label>
                            <input type="number" className="form-control"
                                name='age'
                                value={input.age}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Gender</label>
                            <input type="text" className="form-control"
                                name='gender'
                                value={input.gender}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Blood Group</label>
                            <input type="text" className="form-control"
                                name='blood_group'
                                value={input.blood_group}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Phone</label>
                            <input type="tel" className="form-control"
                                name='phone'
                                value={input.phone}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control"
                                name='email'
                                value={input.email}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control"
                                name='city'
                                value={input.city}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Weight (kg)</label>
                            <input type="number" className="form-control"
                                name='weight_kg'
                                value={input.weight_kg}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Last Donation Date</label>
                            <input type="date" className="form-control"
                                name='last_donation_date'
                                value={input.last_donation_date}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12 text-center">
                            <button className="btn btn-success" onClick={readValue}>
                                Submit
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
)


}

export default AddDonour
