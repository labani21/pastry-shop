import React from 'react'
import './Header.scss'
import {Navbar,Nav,Container,NavDropdown, Form} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';

//import Home from '../Components/Home/Home';
import logo from '../Images/cherry1.png'

export default function Header() {

  const navigate=useNavigate();

  const handleLogout=()=>{
    window.localStorage.clear();
    navigate('/Home');
  }

    
  return (
    <div>
    <Navbar className='newnavbar' bg="myColor" variant="black" >
  <Container>
  <Navbar.Brand >
 <img src={logo} className="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
   
     
    </Nav>
    <Nav className='optionNav'>
    <Nav.Link as={Link} className='option-home' to="/Home">Home</Nav.Link>
      <Nav.Link as={Link} className='option-menu' to="/Menu">Menu</Nav.Link>
      <Nav.Link as={Link} className='option-about' to="/About">AboutUs</Nav.Link>
      <Nav.Link as={Link} className='option-reg' to="/Registration">Sign Up</Nav.Link>
     
      <NavDropdown  title="Profile" className='option-profile' id="collasible-nav-dropdown" >
      <NavDropdown.Item className='option' as={Link} to="/Login">Sign In</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item  className='option' onClick={handleLogout}>Logout</NavDropdown.Item>
    </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


    </div>
  )
}
