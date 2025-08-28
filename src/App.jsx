import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import TodoApp from './components/ToDoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <TodoApp />
    </>
  )
}

export default App
