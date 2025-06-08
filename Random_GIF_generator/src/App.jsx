import { useState } from 'react'
import './App.css'
import './index.css'

import Tags from './components/Tag'
import Random from './components/Random'
import Spinner from './components/Spinner'

function App() {
  

  return (
    <div>

      <h1>Random GIF Generator</h1>

      <Random/>
      <Tags/>

      
    </div>

  )
}

export default App
