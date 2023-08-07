import React, { useState } from 'react'
import './TodoForm.css'


// 2 child component start

function TodoForm({ todo, remove, update, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false)
    const [task, setTask] = useState(todo.task)

    const handleClick = e => {
        console.log(e.target.id)
        remove(e.target.id)
    }

    const toggleForm = () => {
        setIsEditing(!isEditing)
    }

    const handleChange = e => {
        setTask(e.target.value)
    }

    const handleUpdate = e => {
        e.preventDefault()
        update(todo.id, task)
        toggleForm()
    }

    const toggleCompleted = e => {
        toggleComplete(e.target.id)
    }

    let result
    if (isEditing) {
        result = (
            <div className="TodoForm">
                <form className="TodoForm-edit-form" onSubmit={handleUpdate}>
                    <input value={task} onChange={handleChange} />
                    <button>Save</button>
                </form>
            </div>
        )
    } else {
        result = (
            <div className="TodoForm">
                <div>
                    <li
                    id={todo.id}
                    onClick={toggleCompleted}
                    className={todo.completed ? "TodoForm-task completed" : "TodoForm-task"} > {todo.task}
                    </li> 
                </div>
                <div className="TodoForm-buttons">
                    <button onClick={toggleForm}> <i className="fas fa-pen" /></button>
                    <button id={todo.id} onClick={handleClick}><i className="fas fa-trash" /></button>
                </div>
            </div>
        )
    }
    return result
}
   // 2 child component ends

export default TodoForm