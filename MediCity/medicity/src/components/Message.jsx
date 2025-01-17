import React, { useState } from 'react';
import './Message.css'
import axios from 'axios'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';


function Message() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const {backendUrl} = useContext(AppContext)

  const sendMessage = async (e) => {
    e.preventDefault();
    
    try {
       
      const {data} =  await axios.post(backendUrl + '/api/user/messages', { firstName, lastName, email, phone, message })

      console.log(data.message)
      if(data.success){
         toast.success(data.message)
         setFirstName('');
         setLastName('');
         setEmail('');
         setPhone('');
         setMessage('');
      }
      else {
          toast.error(data.message)
      }
    } catch (error) {
         console.error("Error sending message:", error)
         toast.error("There was an issue sending your message. Please try again later.")
         
    }
  }

  return (
    <div className='container form-component message-form'>
        <div className='form-card p-4 shadow-sm rounded'>
      <h2 className='text-center mb-4'>Send Us A Message</h2>
      <form onSubmit={sendMessage}>
        {/* First Row: First Name and Last Name */}
        <div className='row mb-3'>
          <div className='col-md-6'>
            <input
              type='text'
              className='form-control custom-input'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='col-md-6'>
            <input
              type='text'
              className='form-control custom-input'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        {/* Second Row: E-mail and Phone Number */}
        <div className='row mb-3'>
          <div className='col-md-6'>
            <input
              type='email'
              className='form-control custom-input'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='col-md-6'>
            <input
              type='number'
              className='form-control custom-input'
              placeholder='Telephone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        {/* Third Row: Message Textarea */}
        <div className='row mb-3'>
          <div className='col-12'>
            <textarea
              className='form-control custom-input'
              rows={8}
              placeholder='Please enter your message here...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        
        <div className='d-flex justify-content-center'>
          <button type='submit' className='btn btn-primary custom-button'>
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Message;
