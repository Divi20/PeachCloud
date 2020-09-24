import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function BodyContent() {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" className="navbar sticky navbar-dark">
    <Navbar.Brand href="#home">
    <div className="row">
    <img
    src="./images/pclogovec.jpeg"
    width="60"
    height="60"
    className="d-inline-block align-top"
    alt="React Bootstrap logo"
    style={{borderRadius:"10px" }}
  />
<h2 style={{color:"#fff"}}>Peach Cloud</h2>
    </div>
     
  
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Home</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          AboutUs
        </Nav.Link>
        <Nav.Link href="#deets">ContactUs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  
  </Navbar>
  
 
        </div>
    
    );
  }

  export default BodyContent;