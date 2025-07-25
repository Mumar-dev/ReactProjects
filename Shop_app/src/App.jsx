import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navebar from './components/Navebar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {

  return (
    <div>
      <Navebar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='cart' element= {<Cart/>}/>
      </Routes>

    </div>
  )
}

export default App
