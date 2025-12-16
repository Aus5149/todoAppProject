import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import { AuthContext } from './contexts/AuthContext';
import RequireAuth from './components/RequireAuth';
import { TodoContext } from './contexts/ToDoContext';
import Home from './pages/Home';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';
import Logout from './pages/Logout';

function Layout() {
  return (
    <>
      <Navbar style={{fontSize: "20px"}} bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/Home">Todos</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href="/add">Add To-do</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
     
      <Outlet />
      <footer className='bg-light text-center py-3'> 
        <p> &copy; Powered by Starred 2011-2XXX</p>
        </footer>
    </>
  );
}

export default function App() {
   const [todos, setTodos] = useLocalStorage('todos', []);
  const [token, setToken] = useLocalStorage('token', null);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
       <TodoContext.Provider value={{ todos, setTodos }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<ErrorPage />} />
       
          <Route
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
            path="/Home"
           
          />

             <Route
            element={
              <RequireAuth>
                <AddTodo />
              </RequireAuth>
            }
            path="/Add"
           
          />
    <Route
            element={
              <RequireAuth>
                <EditTodo />
              </RequireAuth>
            }
            path="/todo/:id"
           
          />
              <Route
            element={
              <RequireAuth>
                <Logout />
              </RequireAuth>
            }
            path="/logout"
           
          />

             </Route>
        </Routes>
      </BrowserRouter>
      </TodoContext.Provider>
    </AuthContext.Provider>
    
  );
}
