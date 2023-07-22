import { useState } from 'react'
import './App.css'
import Navber from './components/Header/Navber'
import Footer from './components/Footer/Footer'
import Register from './components/Register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navber></Navber>
    <Register></Register>
    <Footer></Footer>
    </>
  )
}

export default App
