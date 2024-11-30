import React, { useContext, useEffect } from 'react'
import { toast } from "react-toastify";
import { AdminContext } from '../../context/AdminContext';

function Messages() {

    const {aToken, messages, getAllMessages} = useContext(AdminContext);

    useEffect(() => {
          
        if(aToken) {
            getAllMessages()
        }
     }, [aToken])

  return (
    <section className=' ms-11 w-full me-11'>
        <div className='px-4 py-4 mt-10 rounded-t border bg-green-200'>
           <h1 className='font-semibold text-xl'>ALL MESSAGES</h1>
        </div>
       <div className='pt-4 border border-t-0 bg-white' >
           {messages && messages.length > 0 ? (
          messages.map((item) => {
            return (
                <div  className=' items-center px-6 py-3 gap-3 hover:bg-green-400'  key={item._id}>
                
                <p>
                  First Name: <span className='text-blue-600 font-medium'>{item.firstName}</span>
                </p>
                <p>
                  Last Name: <span className='text-blue-600 font-medium'>{item.lastName}</span>
                </p>
                <p>
                  Email: <span className='text-blue-600 font-medium'>{item.email}</span>
                </p>
                <p>
                  Phone: <span className='text-blue-600 font-medium'>{item.phone}</span>
                </p>
                <p>
                  Message: <span className='text-blue-600 font-medium'>{item.message}</span>
                </p>
              
            </div>
          );
        })
      ) : (
        <h1>No Messages!</h1>
      )}
    </div>
  </section>
);
};
  


export default Messages;