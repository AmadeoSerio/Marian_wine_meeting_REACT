import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


function BasicExample() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaD-yjOboDsBc6QSyZOvklscK-TwjJJI0DohTqcThzs68V1bPZyNa9my31gFUPbHivanFK4vP4dauaWljYFv0qBkcz8x=s1600"
              className="imgBrand"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='navLinkHome'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='navLink'>Malbec</Nav.Link>
            <Nav.Link href="#link" className='navLink'>Syrah</Nav.Link>
            <Nav.Link href="#link" className='navLink'>Cabernet</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        <CartWidget/>

      </Container>
    </Navbar>
  );
}

export default BasicExample;