import { useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx'
import AddTodo from './components/AddTodo.jsx'
function App() {

  return (
    <div className="min-h-screen bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">ToDo Items</h1>
          <AddTodo/>
          <Todo/>
        </div>
      </div>
    </div>
  )
}

export default App
