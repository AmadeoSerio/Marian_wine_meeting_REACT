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
              src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaBvY0aFgaqi6shl73EZi6Hz5TCMmvk-9rA08NjK2ABl_AlJQHvaB--fiUeik6tdRvkKQ4TQvycHciqxyWpCBB4fmpCFsg=s2560"
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