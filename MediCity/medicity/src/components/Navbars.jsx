import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';


function Navbars() {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // const data = [
  //   "Sekhar Krishna",
  //   "Sneha Varghese",
  //   "Janaki Parameswar",
  //   "Catherine Philip",
  //   "Node.js",
  //   "Bootstrap",
  //   "MongoDB",
  //   "Express",
  //   "Redux",
  //   "TypeScript",
  // ];


  const {doctors} = useContext(AppContext)

  const handleSearch = (e) => {
    e.preventDefault();

    // Find the doctor whose name matches the input
   
    const doctor = doctors.find(
      (doc) => doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(doctor);
    

    
    if (doctor) {
      // Navigate to the specific doctor's page
      navigate(`./book-an-appointment/${doctor._id}`);
    } else {
      alert("Doctor not found!");
    }
  };

  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary align-items-end">
           <Container fluid>
           
           
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/departments">Departments</Nav.Link>
            
            <Nav.Link href="/about-us" >
              About Us
            </Nav.Link>
            <Nav.Link href="/contact-us" >
              Contact Us
            </Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
              <NavDropdown.Item href="/testimonials"> Testimonials</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/gallery"> Photo Gallery</NavDropdown.Item>

            </NavDropdown>
           
          
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Enter Doctor's Name"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>

         
        
      </Container>
    </Navbar>
    </>
    
  )
}

export default Navbars