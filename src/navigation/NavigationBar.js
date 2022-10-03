import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


const NavigationBar = () => {
  return (
    <div>



    <Navbar  expand="lg" className='text-center navColor'>
      <Container>
        <Navbar.Brand href="/">The Movie App</Navbar.Brand>
   

          <Nav className="me-auto text-center">
            {/* <Link to="/" className='m-1'>Home</Link> */}
            <Link to="/search" className='m-1' >Search for Movies</Link>
            <Link to="/favoriteMoviesPage" className='m-1'>My Favorite Movies</Link>
     
           
          </Nav>
     
      </Container>
    </Navbar>








    </div>
  )
}

export default NavigationBar