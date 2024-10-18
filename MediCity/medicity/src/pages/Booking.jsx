
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import './booking.css'
import { AppContext } from "../context/AppContext";


function Booking() {

    const {doctors} = useContext(AppContext)
    


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [idNo, setIdNo] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");


  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Nephrology",
    "NeuroSurgery",
    "Oncology",
    "General Medicine",
    "Ophthalmology",
    "Dermatology",
    "ENT", "Gynecology", "Gastroenterology",
  ];

  const [newDoctor, setNewDoctor] = useState("");

  const handleAppointment = (e)=>{
              e.preventDefault();

  }

  

  return (
    <div>
        
        <div className="container form-component appointment-form">
        <h2 className="appDiv">Please Fill The Form To Get An Appointment</h2>
        <form onSubmit={handleAppointment} className="myForm">
          <div className="appDiv1">
            <input className="myInput"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input className="myInput"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="appDiv2">
            <input className="myInput"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input className="myInput"
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="appDiv2">
            <input className="myInput"
              type="text"
              placeholder="Any ID Card Number"
              value={idNo}
              onChange={(e) => setIdNo(e.target.value)}
            />
            <input className="myInput"
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="appDiv2">
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="myInput">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input className="myInput"
              type="date"
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
          </div>
          <div className="appDiv2">
            <select className="myInput"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setNewDoctor("");
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              {departmentsArray.map((depart, index) => {
                return (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                );
              })}
            </select>
            <select  className="myInput"
              value={newDoctor}
              onChange={(e) => setNewDoctor(e.target.value) }
            //    { const [firstName, lastName] = e.target.value.split(" ");
            //     setDoctorFirstName(firstName);
            //     setDoctorLastName(lastName);
            //   }}
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter((doctor) => doctor.speciality === department)
                .map((doctor, index) => (
                  <option
                    value={`${doctor.name}`}
                    key={index}
                  >
                    {doctor.name}
                  </option>
                ))}
            </select>
          </div>
          <textarea className="appDiv3"
            rows="10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <div>

             <button type="submit" className='appButton' >GET APPOINTMENT</button> 
           </div>
        </form>
      
      </div>
    </div>
  )
}

export default Booking