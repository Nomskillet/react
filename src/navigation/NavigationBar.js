import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


const NavigationBar = () => {
  return (
    
    <div className=''>



    <Navbar  expand="lg" className='navColor fontFam'>
      <Container>
        <Navbar.Brand href="/">CiniCliq</Navbar.Brand>
   

          <Nav className="">
            {/* <Link to="/" className='m-1'>Home</Link> */}
            <Link to="/search" className='m-2' >Search for Movies</Link>
            <Link to="/favoriteMoviesPage" className='m-2'>My Favorite Movies</Link>
     
           
          </Nav>
     
      </Container>
    </Navbar>








    </div>
  )
}

export default NavigationBar