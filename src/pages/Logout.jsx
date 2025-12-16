import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function Logout() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  function logout() {
      authContext.setToken('');
      navigate('/login');
    
  }

    function Cancel() {
      navigate('/home');
    
  }

  return (
    <Container className='text-center py-5'>
      <h1 className="my-3">Are you sure?</h1>
      <h3 className='my-3'>Do you wish to logout?</h3>
      <h6 className='my-3' style={{color: "red"}}>Note: Starred will be notified by your absence...</h6>
      <Form>
           <Button className='mx-3' variant="secondary" onClick={Cancel}>
          Cancel
        </Button>
        
        <Button className='mx-3' variant="danger" onClick={logout}>
          Logout
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
