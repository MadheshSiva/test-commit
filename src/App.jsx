import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionCom from './components/functionCom'
import ClassComp from './components/classCom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FunctionCom/>
    <ClassComp/>
    </>
  )
}

export default App
