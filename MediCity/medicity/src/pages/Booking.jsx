
// import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import './booking.css'
// import { AppContext } from "../context/AppContext";
// import axios from 'axios';


import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import './booking.css';
import { AppContext } from "../context/AppContext";
import axios from 'axios';

function Booking() {
    const { doctors, backendUrl } = useContext(AppContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [idNo, setIdNo] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [slotDate, setSlotDate] = useState("");
    const [department, setDepartment] = useState("Pediatrics");
    const [address, setAddress] = useState("");
    const [newDoctor, setNewDoctor] = useState("");

    const departmentsArray = [
        "Pediatrics", "Orthopedics", "Cardiology", "Neurology", "Nephrology",
        "NeuroSurgery", "Oncology", "General Medicine", "Ophthalmology",
        "Dermatology", "ENT", "Gynecology", "Gastroenterology", "Urology"
    ];

    const handleAppointment = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(backendUrl + '/api/user/bookings', {
                firstName, lastName, email, phone, idNo, age, gender, slotDate, department, doctorId: newDoctor, address,
            });
            console.log(data);
            

            console.log(data.message);
            if (data.success) {
                toast.success(data.message);
                
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setIdNo('');
                setAge("");
                setGender("");
                setSlotDate("");
                setDepartment("Pediatrics");
                setAddress("");
                setNewDoctor("");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
          console.error("Error booking appointment:", error.message, error.stack);
            toast.error("There was an issue booking your appointment. Please try again.");
        
           
        }
    };

    return (
        <div className="container form-component appointment-form">
            <h2 className="appDiv">Please Fill The Form To Get An Appointment</h2>
            <form onSubmit={handleAppointment} className="myForm">
                
                <div className="appDiv1">
                    <input className="myInput" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input className="myInput" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
               
                <div className="appDiv2">
                    <input className="myInput" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="myInput" type="number" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                
                <div className="appDiv2">
                    <input className="myInput" type="text" placeholder="ID Card Number" value={idNo} onChange={(e) => setIdNo(e.target.value)} />
                    <input className="myInput" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
               
                <div className="appDiv2">
                    <select value={gender} onChange={(e) => setGender(e.target.value)} className="myInput">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input className="myInput" type="date" placeholder="Appointment Date" value={slotDate} onChange={(e) => setSlotDate(e.target.value)} />
                </div>
                
                <div className="appDiv2">
                    <select className="myInput" value={department} onChange={(e) => setDepartment(e.target.value)}>
                        {departmentsArray.map((depart, index) => (
                            <option value={depart} key={index}>{depart}</option>
                        ))}
                    </select>
                    <select className="myInput" value={newDoctor} onChange={(e) => setNewDoctor(e.target.value)} disabled={!department}>
                        <option value="">Select Doctor</option>
                        {doctors
                            .filter((doctor) => doctor.speciality === department)
                            .map((doctor) => (
                                <option value={doctor._id} key={doctor._id}>{doctor.name}</option>
                            ))}
                    </select>
                </div>
                
                <textarea className="appDiv3" rows="10" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                <div>
                    <button type="submit" className='appButton'>GET APPOINTMENT</button>
                </div>
            </form>
        </div>
    );
}

export default Booking;


// function Booking() {

//     const {doctors, backendUrl} = useContext(AppContext)
    


//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [idNo, setIdNo] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [slotDate, setSlotDate] = useState("");
//   const [department, setDepartment] = useState("Pediatrics");
//   const [address, setAddress] = useState("");


//   const departmentsArray = [
//     "Pediatrics",
//     "Orthopedics",
//     "Cardiology",
//     "Neurology",
//     "Nephrology",
//     "NeuroSurgery",
//     "Oncology",
//     "General Medicine",
//     "Ophthalmology",
//     "Dermatology",
//     "ENT", "Gynecology", "Gastroenterology",
//   ];

//   const [newDoctor, setNewDoctor] = useState("");

//   const handleAppointment = async (e)=>{
//               e.preventDefault();

//        try{

//          const {data} = await axios.post(backendUrl + '/api/user/bookings',
//            {firstName, lastName, email, phone,idNo, age, gender, slotDate, department,newDoctor,address})
          
//            console.log(data.message)
//            if(data.success){
//                toast.success(data.message)
//                setFirstName('');
//                setLastName('');
//                setEmail('');
//                setPhone('');
//                setIdNo('');
//                setAge("");
//                setGender("");
//                setSlotDate("");
//                setDepartment("Pediatrics");
//                setAddress("");

//            }else {
//             toast.error(data.message)
//         }
//        }
//        catch(error){
//             console.error("Error sending message:", error)
//             toast.error("There was an issue sending your message. Please try again later.")
         
//        }


//   }

  

//   return (
//     <div>
        
//         <div className="container form-component appointment-form">
//         <h2 className="appDiv">Please Fill The Form To Get An Appointment</h2>
//         <form onSubmit={handleAppointment} className="myForm">
//           <div className="appDiv1">
//             <input className="myInput"
//               type="text"
//               placeholder="First Name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input className="myInput"
//               type="text"
//               placeholder="Last Name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div className="appDiv2">
//             <input className="myInput"
//               type="text"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input className="myInput"
//               type="number"
//               placeholder="Mobile Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div className="appDiv2">
//             <input className="myInput"
//               type="text"
//               placeholder="Any ID Card Number"
//               value={idNo}
//               onChange={(e) => setIdNo(e.target.value)}
//             />
//             <input className="myInput"
//               type="number"
//               placeholder="Age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//           </div>
//           <div className="appDiv2">
//             <select value={gender} onChange={(e) => setGender(e.target.value)} className="myInput">
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//             <input className="myInput"
//               type="date"
//               placeholder="Appointment Date"
//               value={slotDate}
//               onChange={(e) => setSlotDate(e.target.value)}
//             />
//           </div>
//           <div className="appDiv2">
//             <select className="myInput"
//               value={department}
//               onChange={(e) => {
//                 setDepartment(e.target.value);
//                 setNewDoctor("");
//                 setDoctorFirstName("");
//                 setDoctorLastName("");
//               }}
//             >
//               {departmentsArray.map((depart, index) => {
//                 return (
//                   <option value={depart} key={index}>
//                     {depart}
//                   </option>
//                 );
//               })}
//             </select>
//             <select  className="myInput"
//               value={newDoctor}
//               onChange={(e) => setNewDoctor(e.target.value) }
//             //    { const [firstName, lastName] = e.target.value.split(" ");
//             //     setDoctorFirstName(firstName);
//             //     setDoctorLastName(lastName);
//             //   }}
//               disabled={!department}
//             >
//               <option value="">Select Doctor</option>
//               {doctors
//                 .filter((doctor) => doctor.speciality === department)
//                 .map((doctor, index) => (
//                   <option
//                     value={`${doctor.name}`}
//                     key={index}
//                   >
//                     {doctor.name}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <textarea className="appDiv3"
//             rows="10"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder="Address"
//           />
//           <div>

//              <button type="submit" className='appButton' >GET APPOINTMENT</button> 
//            </div>
//         </form>
      
//       </div>
//     </div>
//   )
// }

// export default Booking
