import { useContext } from 'react';
import { Badge, Card, Col, Container, Navbar, Row } from 'react-bootstrap';
import { TodoContext } from '../contexts/ToDoContext';
import TodoCard from "../components/TodoCard"

export default function Home() {
  const todos = useContext(TodoContext).todos;
  return (
    <Container>
 <Navbar>
   <h1 className="my-3">Welcome back to Omba's cooking database.</h1>
</Navbar>
    <h2 className="my-3">List of To-do</h2>
      <Row>
        <CardGroup todos={todos} />
      </Row>
       
    </Container>
  );
}

function CardGroup({todos}){
    return todos.map((todo) => {
        return(
            <Col md={4} key={todo.id}>
                <TodoCard todo={todo}/>
            </Col>
        )
    })
}
