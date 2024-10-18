
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Auth from './pages/Auth'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import BookAppointment from './pages/BookAppointment'
import PatientProfile from './pages/PatientProfile'
import PatientAppointment from './pages/PatientAppointment'
import Navbars from './components/Navbars'
import Depart from './pages/Depart'
import Booking from './pages/Booking'


function App() {
  

  return (
    <>
       <Header/>
       <Navbars/>
        <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/doctors' element={<Doctors/>} />
             <Route path='/departments' element={<Depart/>} />
             <Route path='/departments/:speciality' element={<Depart/>} />
             <Route path='/login' element={<Auth/>} />
             <Route path='/register' element={<Auth register = {"register"} />}/>
             <Route path='/contact-us' element={<ContactUs/>} />
             <Route path='/about-us' element={<AboutUs/>} />
             <Route path='/book-an-appointment' element={<Booking/>} />
             <Route path='/book-an-appointment/:doctorId' element={<BookAppointment/>} />
             <Route path='/patient-profile' element={<PatientProfile/>} />
             <Route path='/patient-appointment' element={<PatientAppointment/>} />
             <Route path='/' element={<Home/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
