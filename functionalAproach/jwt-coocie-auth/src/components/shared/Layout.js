import { Link } from 'react-router-dom' 
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/home">JWT httpOnly Cookie Auth Login example</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
      <Container>{ children }</Container>
    </>
  )
}

export default Layout;