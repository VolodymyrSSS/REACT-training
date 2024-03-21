import { useRef, useContext } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthContext from '../components/shared/AuthContext';

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const { loginApiCall } = useContext(AuthContext);

  const loginHandler = async () => {
    let payload = {
      email: email.current.value,
      password: password.current.value,
    }
    await loginApiCall(payload);
  }

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Login Form</legend>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" ref={email}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={password}/>
            </Form.Group>
            <Button variant="outline-success" type="button" onClick={loginHandler}>Login</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;