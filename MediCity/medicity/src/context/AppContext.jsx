import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();


const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    const [doctors, setDoctors] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token'):false)

    const [userData, setUserData] = useState(false)

    const [careers, setCareers] = useState([])

    


    const getDoctorsData = async() => {

        try{
           const {data} = await axios.get(backendUrl + '/api/doctors/list')
           if (data.success) {
              setDoctors(data.doctors)
           }
           else{
             toast.error(data.message)
           }
        }
        catch(error){
            console.log(error)
            toast.error(error.message)          
            
        }
    }


    const loadUserProfileData = async() => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/get-profile', {headers:{token}})

            console.log(data)
            console.log(data.userData)
            
            

            if(data.success) {
                setUserData(data.userData)
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            console.log(error)
            toast.error(error.message)  
        }
    }


    const getCareersData = async() => {

        try{
           const {data} = await axios.get(backendUrl + '/api/user/all-careers')
           if (data.success) {
              setCareers(data.careers)
           }
           else{
             toast.error(data.message)
           }
        }
        catch(error){
            console.log(error)
            toast.error(error.message)          
            
        }
    }

    

    const value = {
        doctors, getDoctorsData, token, setToken,
        backendUrl, userData, setUserData,
        loadUserProfileData, careers, getCareersData, setCareers,
        
    }



    useEffect(()=> {
        getDoctorsData()
     },[])

     useEffect(() => {
          if(token){
            loadUserProfileData()
          } else{
            setUserData(false)
          }
     },[token])

     useEffect(() => {
        getCareersData()
     },[])

    

    return (

        <AppContext.Provider value={value}>
              {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider;