import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { TodoContext } from '../contexts/ToDoContext';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditTodo() {
 const setTodos = useContext(TodoContext).setTodos
 const todos = useContext(TodoContext).todos
 const navigate = useNavigate()
 const id = parseInt(useParams().id)
 const currentTodo = todos.filter((todo) => todo.id === id)[0]
   const [title, setTitle] = useState(currentTodo.title);
  const [description, setDescription] = useState(currentTodo.description);
  const [completed, setCompleted] = useState(currentTodo.completed);


 function updateTodo(event){
    event.preventDefault()
    const updatedTodos
= todos.map((todo) => {
    if (todo.id===id){
        return {id, title, description, completed}
    }
    return todo
}) 
setTodos(updatedTodos)
navigate("/Home")
}

return(
    <Container>
        <h1 className='my-3'>Edit Todo</h1>
        <Form onSubmit={updateTodo}>
            <Form.Group className='mb-3' controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                value={title}
                onChange={(event)=> setTitle(event.target.value)}
                type='text'
                placeholder='stuff'
                required
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='title'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                value={description}
                onChange={(event)=> setDescription(event.target.value)}
                as="textarea"
                rows={3}
                placeholder='changes'
                required
                />
            </Form.Group>
            <Form.Check
            type='checkbox'
            id='completed'
            label='Mark as completed'
            checked={completed}
            onChange={(event)=> setCompleted(event.target.checked)}
            className='mb-3' 

            />
             <h6 style={{color: "red"}}>Note: The Paus are not held responsible for the changes.</h6>
            <Button variant='primary' type='submit'>
                 Submit
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
)

}