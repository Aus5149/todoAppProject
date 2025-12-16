import { useContext, useEffect, useState } from "react"
import { Button, Card, CardBody } from "react-bootstrap"
import { TodoContext } from "../contexts/ToDoContext"

export default function TodoCard({todo}){
    const completed = todo.completed
    const border = completed ? 'success':'danger'
    const [timer, setTimer] = useState(0)
    const [timerInterval, setTimerInterval] = useState(null)
    const setTodos = useContext(TodoContext).setTodos

    const startTimer = () => {
        if (timerInterval === null){
            const intervalID = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1)
            },1000)
            setTimerInterval(intervalID)

        }
    }
 
    const pauseTimer = () => {
        clearInterval(timerInterval)
        setTimerInterval(null)
    }

    const resetTimer = () => {
        clearInterval(timerInterval)
        setTimerInterval(null)
        setTimer(0)
    }

    const deleteTodo = () => {
        setTodos((prevTodos) => 
        prevTodos.filter((prevTodos) => prevTodos.id !== todo.id)
        )
    }
    useEffect(() => {
        return () => {
            clearInterval(timerInterval)
        }
    }, [timerInterval])



    return(
        <>
        <Card border={border} className="my-3">
            <Card.Header style={{fontFamily: "sans-serif", fontSize: "20px"}}>{!completed && "😾👎Not"} Complete</Card.Header>
            <CardBody>
                <Card.Title>{todo.title}</Card.Title>
                <Card.Text style={{fontSize: "17px"}}>{todo.description}</Card.Text>
                <h5>Timer: {timer} seconds</h5>

                <Button onClick={startTimer} style={{fontSize: "30px"}}>
                    <i className="bi bi-play"></i>
                </Button>

                <Button onClick={pauseTimer} className="ms-2" style={{fontSize: "30px"}} >
                    <i className="bi bi-pause-fill"></i>
                </Button>

                  <Button onClick={resetTimer} className="ms-2" style={{fontSize: "30px"}}>
                    <i className="bi bi-arrow-clockwise"></i>
                </Button>

                     <Button variant="secondary" href={`todo/${todo.id}`} className="ms-2" style={{fontSize: "30px"}}>
                    <i className="bi bi-pencil"></i>
                </Button>

                    <Button variant="danger" onClick={deleteTodo} className="ms-2" style={{fontSize: "30px"}}>
                    <i className="bi bi-trash3"></i>
                </Button>
            </CardBody>
        </Card>
        </>
    )
}