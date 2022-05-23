import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const CustomNavbar = {
    backgroundColor: "#dfddf5",
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: "400",
    fontSize: "1.4rem",
    padding: "2% 16%"
  }

  return (
    <>
      <Navbar expand='lg' fixed='top' style={ CustomNavbar }>
        <Container fluid>
          <Navbar.Brand href='/index' style={{ fontSize:'1.4rem' }}>
            <img src= { process.env.PUBLIC_URL + '/favicon.ico' } alt='pixel-logo' width='35' height='28' className='align-top' />
            <span style={{ padding: '0% 5%' }}>Jingyi's page</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='page-navbar-nav' />
          <Navbar.Collapse id='navbar-content'>
            <Nav className='ms-auto'>
              <Nav.Link href='/home' className='active'>About me</Nav.Link>
              <Nav.Link href='/project'>Project</Nav.Link>
              <NavDropdown title={ <FontAwesomeIcon icon={faEarthAsia} /> } id='language-dropdown'>
                <NavDropdown.Item href='#action/cn'>Simplified Chinese</NavDropdown.Item>
                <NavDropdown.Item href='#action/eng'>English</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header