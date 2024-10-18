import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary align-items-end">
           <Container fluid>
           
           
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/departments">Departments</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about-us" >
              About Us
            </Nav.Link>
            <Nav.Link href="/contact-us" >
              Contact Us
            </Nav.Link>
            <Nav.Link href="#" >
              Careers
            </Nav.Link>
            <Nav.Link href="#" >
              Testimonials
            </Nav.Link>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        
      </Container>
    </Navbar>
    </>
    
  )
}

export default Navbars