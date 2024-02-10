
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import "./TodoList.css"
export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos([...todos, {task: newTodo, id:uuidv4(), isDone:false}]);
    }
    let updateTodoValue =(event)=> {
        setNewTodo(event.target.value);
    }
    let deleteTodoValue = (id) => {
        setTodos((prevTodos) => (
            prevTodos.filter((prevTodos) => 
            prevTodos.id != id
        ))
     );
    
    }
    let markAllDone = () => {
        setTodos((todos) => (
        todos.map((todo) =>{
            return {
                ...todo,
                // task: todo.task.toUpperCase(),
                isDone : true,
            }
        })) );
        
    }
    let markAsDone = (id) => {
        setTodos((todos) => (
            todos.map((todo) =>{
                if(todo.id == id) {
                    return {
                        ...todo,
                        isDone : true,
                    }
                } else {
                    return todo;
                }
            })
            ));
        }
    
    return (
        <div className="todo">
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {
                todos.map((todo) => (
                    <li key={todo.id} >
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodoValue(todo.id)}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                    </li>
                ))
                }
            </ul>
            <button onClick={markAllDone}>Mark All Done</button>
        </div>
    )

}