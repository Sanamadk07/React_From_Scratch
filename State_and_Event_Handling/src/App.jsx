import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionClick from './Component/FunctionClick'
import ClassClick from './Component/ClassClick'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FunctionClick />
      <ClassClick />
    </>
  )
}

export default App
