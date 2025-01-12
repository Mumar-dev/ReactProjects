import React from 'preact/compat'
import { MyData } from './Data/Mydata'
// import './app.css'

import Navebar from './Component/Navebar'
import FilterData from './Component/Filter'


export function App() {
  // const [count, setCount] = useState(0)

  return (
   
    <div>
      <Navebar></Navebar>
      <FilterData MyData={MyData}></FilterData>
    </div>
  )
}

export default App;
