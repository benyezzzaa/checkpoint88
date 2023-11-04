import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css.css'
import { NavLink } from 'react-router-dom';
import App from './App';

function Navbarr() {
  return (
    
      <Navbar bg="dark" data-bs-theme="dark" className='fatma'>
        <Container>
          <Navbar.Brand href="#home">HooksCheckpoint</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Films</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     

     
  );
}

export default Navbarr;