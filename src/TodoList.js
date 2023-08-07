import React, {useState} from "react"
import './TodoList.css'
import TodoBar from './TodoBar'
import TodoForm from './TodoForm'

// parent component start

function TodoList() {
   const [todos, setTodos] = useState([])

   // CURD funtions starts
   const create = newTodo => {
      setTodos([...todos, newTodo])
   }
   console.log(todos)

   const update = (id, updatedTask) => {
      const updatedTodos = todos.map(todo => {
         if (todo.id === id) {
            return { ...todo, task: updatedTask }
         }
         return todo
      })
      setTodos(updatedTodos)
   }

   const remove = id => {
      console.log(id)
      setTodos(todos.filter(todo => todo.id !== id))
   }

   const toggleComplete = id => {
      const updatedTodos = todos.map(todo => {
         if (todo.id === id) {
            return { ...todo, completed: !todo.completed }
         }
         return todo
      })
      setTodos(updatedTodos)
   }

   // CURD funtions ends
   // call 1 child component starts 
   const todosList = todos.map(todo => (
      <TodoForm
         key={todo.id}
         remove={remove}
         toggleComplete={toggleComplete}
         update={update}
         todo={todo} />
   ))
   // call  1 child component ends
   console.log(todos)

   // call 2 child component starts 
   return (
      <div className="TodoList">
         <h1>React Todo List</h1>
         <TodoBar createTodo={create} />
         <ul>{todosList}</ul>
      </div>
   )
   //  call 2 child component ends
}
// parent component ends

export default TodoList
