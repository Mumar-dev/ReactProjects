import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Resizewindow from './component/Resizewindow'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
        <Resizewindow></Resizewindow>
      </div>
      
  )
}

export default App
