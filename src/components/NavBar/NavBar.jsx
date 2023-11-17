import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function BasicExample() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Link to="/">
          <img
            src="http://drive.google.com/uc?export=view&id=1J0jvf0JACQ8TwjgyP_ND0b2kPlc8ioUo"
            className="imgBrand"
          />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link className='navLinkHome' to="/">Inicio</Link>


            <NavLink className='navLink' to="varietal/malbec">Malbec</NavLink>
            <NavLink className='navLink' to="varietal/syrah">Syrah</NavLink>
            <NavLink className='navLink' to="varietal/cabernet">Cabernet</NavLink>
          </Nav>
        </Navbar.Collapse>

        <CartWidget />

      </Container>
    </Navbar>
  );
}

export default BasicExample;