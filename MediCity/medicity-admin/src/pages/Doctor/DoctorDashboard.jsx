import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";

function DoctorDashboard() {
  const {dToken, dashData, setDashData, getDashData, completeAppointment, cancelAppointment} = useContext(DoctorContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center gap-5 bg-white p-4 min-w-52 rounded border-2 border-red-800 cursor-pointer hover:scale-105 transition-all">
            <i class="fa-regular fa-calendar-check fa-3x"></i>
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.appointments}
              </p>
              <p>Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-white p-4 min-w-52 rounded border-2 border-red-800 cursor-pointer hover:scale-105 transition-all">
            <i class="fa-solid fa-bed fa-3x"></i>
            <div>
              <p className="text-xl font-semibold text-red-600">
                {dashData.patients}
              </p>
              <p>Patients</p>
            </div>
          </div>
        </div>


        <div className='bg-white ms-6 w-[800px]'>
           <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
            <i class="fa-solid fa-list fa-2x"></i>
            <p className='font-semibold text-xl'>Latest Appointments</p>
           </div>

           <div className='pt-4 border border-t-0'>

            {
              dashData.latestAppointments.map((item, index) => (
                <div className='flex items-center px-6 py-3 gap-3 hover:bg-green-400' key={index}>
                    <img className='rounded-full w-10' src={item.userData.image} alt="" />
                    <div className='flex-1 text-sm'>
                       <p className='text-blue-950 font-medium' >{item.userData.name}</p>
                       <p className='text-blue-400'>{item.slotDate}</p>
                    </div>
                    
                    {
                      item.cancelled 
                      ? <p className='text-red-500 text-xs font-medium'>Cancelled</p>
                      : item.isCompleted
                          ? <p className='text-green-600 text-xs font-medium'>Completed</p>
                          :  <div className='flex'>
                                <i onClick={() => cancelAppointment(item._id)} className="w-10 cursor-pointer fa-regular fa-rectangle-xmark"></i>
                                <i onClick={() => completeAppointment(item._id)} className="w-10 cursor-pointer fa-regular fa-square-check"></i>
                            </div>
                    }

                 </div>
              ))
            }
           </div>
        </div>
      </div>
    )
  );
}

export default DoctorDashboard;
