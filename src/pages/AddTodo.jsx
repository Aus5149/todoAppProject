import { useContext, useState } from 'react';
import { Button, Container, Form, Navbar } from 'react-bootstrap';
import { TodoContext } from '../contexts/ToDoContext';
import { useNavigate } from 'react-router-dom';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const setTodos = useContext(TodoContext).setTodos;
  const todos = useContext(TodoContext).todos;
  const navigate = useNavigate();

  return (
    <Container>
   <h1 className="my-3">Add a to-do for Ombas</h1>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([
            ...todos,
            { id: Date.now(), title, description, completed },
          ]);
          navigate('/Home');
        }}
      >
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title."
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label >Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
            placeholder={`Recipe or other stuff`}
            required
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          id="completed"
          label="Mark as completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mb-3"
        />
        <h6 style={{color: "red"}}>Note: The Abobas will review your idea to prevent very bad things.</h6>
        <Button variant="primary" type="submit">
          Submit
        </Button>
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
     
      </Form>
    </Container>
  );
}
