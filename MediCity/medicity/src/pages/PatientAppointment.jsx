import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import "./PatientAppointment.css";
import axios from "axios";
//import { Button } from 'bootstrap';
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PatientAppointment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {headers: { token }});

      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + "/api/user/cancel-appointment",{ appointmentId },{ headers: { token } });
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const onlinePayment = async (appointmentId) => {

    console.log("Frontend: Appointment ID being sent:", appointmentId);

    try {
      const {data} = await axios.post(backendUrl + '/api/user/payment-online', {appointmentId}, {headers:{token}})

      if (data.success){
        toast.success(data.message)
        console.log(appointmentId);
        handleClose()
        getUserAppointments();
      }else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div>
      <p className="myDiv">My Appointments</p>
      <div>
        {appointments.map((item, index) => (
          <div key={index} className="d-flex">
            <div className="mb-5">
              <img className="appImage" src={item.doctorData.image} alt="" />
            </div>
            <div className="myDiv1">
              <p className="myDivP">{item.doctorData.name}</p>
              <p>{item.doctorData.speciality}</p>

              <p>Amount : Rs. {item.amount}</p>
              <p>
                <span>Date & Time:</span>
                {item.slotDate} | {item.slotTime}
              </p>
            </div>
            <div> </div>

            <div className="myDivBtn">
            {!item.cancelled && !item.isCompleted && item.payment &&(
                <button className="myDivBtn1" value={pay}>
                  Paid
                </button>
              )}
              
                {!item.cancelled && !item.isCompleted && !item.payment &&(
                <button className="myDivBtn1" onClick={handleShow}>
                  Pay Online
                </button>
              )}
              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="myDivBtn2"
                >
                  Cancel Appointment
                </button>
              )} 
          
              {item.cancelled && !item.isCompleted && (
                <button className="myDivBtn3">Appointment Cancelled</button>
              )}
              {item.isCompleted && (
                <button className="myDivBtn4">Appointment Completed</button>
              )}
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Select Payment Method</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <fieldset>
                  <legend>Choose Payment Option</legend>
                  <div>
                    <input type="radio" id="upi" name="paymentMethod" />
                    <label htmlFor="upi" className="ms-2">
                      Pay with UPI
                    </label>
                    <div className="mt-2 ms-4">
                      <label htmlFor="upiId">UPI ID</label>
                      <input
                        type="text"
                        id="upiId"
                        className="form-control mt-1"
                        placeholder="Enter your UPI ID"
                      />
                    </div>
                  </div>
                  <div>
                    <input type="radio" id="card" name="paymentMethod" />
                    <label htmlFor="card" className="ms-2">
                      Pay with Credit or Debit Card
                    </label>
                    <div className="mt-2 ms-4">
                      <label htmlFor="cardholderName">Cardholder Name</label>
                      <input
                        type="text"
                        id="cardholderName"
                        className="form-control mt-1"
                        placeholder="Name of Cardholder"
                      />
                      <label htmlFor="cardNumber" className="mt-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        className="form-control mt-1"
                        placeholder="Card Number"
                      />
                      <label htmlFor="expiryDate" className="mt-2">
                        Expiry Date
                      </label>
                      <input
                        type="month"
                        id="expiryDate"
                        className="form-control mt-1"
                      />
                    </div>
                  </div>
                </fieldset>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={()=> onlinePayment(item._id)}>
                  Pay and Proceed
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientAppointment;
