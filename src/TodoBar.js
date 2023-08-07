import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './TodoBar.css'


   //1 child component start
function TodoBar({ createTodo }) {
    const [userInput, setUserInput] = useState({})

    const handleChange = e => {
        setUserInput({ [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (userInput.task === '') {
            alert('Please enter the task')
        } else {
            const newTodo = { id: uuid(), task: userInput.task, completed: false }
            createTodo(newTodo)
            setUserInput({ task: '' })
        }
    }


    return (
        <form className='TodoBar' onSubmit={handleSubmit}>
            <input
                value={userInput.task}
                onChange={handleChange}
                type='text'
                name='task'
                placeholder='Your next task...' />
            <button>Add Todo</button>
        </form>
    )
}

//1 child component ends

export default TodoBar
