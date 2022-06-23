import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const CustomNavbar = {
    backgroundColor: "#dfddf5",
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: "400",
    fontSize: "1.4rem",
    padding: "2% 16%"
  }

  function useActiveMatch(to) {
    const resolvedPath = useResolvedPath(to);
    return useMatch({ path: resolvedPath.pathname, end: true });
  }

  return (
    <>
      <Navbar expand='lg' fixed='top' style={ CustomNavbar }>
        <Container fluid>
          <Navbar.Brand href='/' style={{ fontSize:'1.4rem' }}>
            <img src= { process.env.PUBLIC_URL + '/favicon.ico' } alt='pixel-logo' width='35' height='28' className='align-top' />
            <span style={{ padding: '0% 5%' }}>Jingyi's page</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='page-navbar-nav' />
          <Navbar.Collapse id='navbar-content'>
            <Nav className='ms-auto'>
              <CustomNav to='/'>About me</CustomNav>
              <CustomNav to='/projects'>Project</CustomNav>
              {/* <NavDropdown title={ <FontAwesomeIcon icon={faEarthAsia} /> } id='language-dropdown'>
                <NavDropdown.Item href='#action/cn'>Simplified Chinese</NavDropdown.Item>
                <NavDropdown.Item href='#action/eng'>English</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

function CustomNav({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <>
      <LinkContainer to={to} className={isActive ? 'active' : ''}>
        <Nav.Link>{children}</Nav.Link>
      </LinkContainer>
    </>
  )
}