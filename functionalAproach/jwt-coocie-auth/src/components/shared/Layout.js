import { useContext } from 'react'
import { Link } from 'react-router-dom' 
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Button } from 'react-bootstrap';
import AuthContext from './AuthContext';

const Layout = ({ children }) => {

  const {user, logoutApiCall} = useContext(AuthContext);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">JWT httpOnly Cookie Auth Login example</Navbar.Brand>
        <Nav>
          {user && <Nav.Link as={Link} to="/movies">Movies</Nav.Link>}
        </Nav>
        <Nav className="ms-auto">
          {user && (
            <Nav.Link>{user.email}</Nav.Link>
          )}
          {!user && (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
        {user && <Button variant="outline-secondary" type="button" onClick={()=>{logoutApiCall()}}>Logout</Button>}
      </Navbar>
      <Container>{ children }</Container>
    </>
  )
}

export default Layout;