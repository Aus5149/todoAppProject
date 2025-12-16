import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function login() {
    const isCorrectUsername = username === 'omba@gmail.com';
    const isCorrectPassword = password === 'password';
    if (isCorrectUsername && isCorrectPassword) {
      authContext.setToken('1234');
      navigate('/Home');
    }
  }

  return (
    <Container>
      <h1 className="my-3">Login to access Omba's cooking list.</h1>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
           Ombas will share it to other Ombas.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={login}>
          Login
        </Button>
      </Form>
        <br/>
       <br/>
       <br/>
         <br/>
       <br/>
       <br/>
         <br/>
       <br/>
       <br/>
         <br/>
       <br/>
       <br/>
         <br/>
       <br/>
       <br/>
         <br/>
       <br/>
       <br/>
         <br/>
       <br/>
    </Container>
  );
}
