import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { MyData, Myapi} from './Data'
import './App.css'
import Navebar from './component/Navebar'
import FilterData from './component/FilterData'
import Card from './component/Card'

function App() {

  const [data, Setdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect( ()=> {
    const GetData = async () =>{
      try{
        const response =  await fetch(Myapi);
        const ApiData = await response.json();
        Setdata(ApiData.data);
        setLoading(false);
        

      }
      catch (error){
        console.error("NOT Fetching Data")
      }
    }

    GetData();
  }, [] )

  if (loading) {
    return <p>Loading... Please wait!</p>; // Show loading state
  }

  return (
    <div>
      <Navebar></Navebar>

      <FilterData
       MyData = {MyData}>

       </FilterData>

        {
          loading ? (
            <p>Loading... Please wait!</p>
          ) :
          (
            <Card 
            data = {data}>
              Setdata = {Setdata}
            </Card> 
          )
}
    </div>

  )
}

export default App;
