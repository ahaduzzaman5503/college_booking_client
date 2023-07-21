import { useState } from 'react'
import './App.css'
import Navber from './components/Header/Navber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navber></Navber>
    </>
  )
}

export default App
