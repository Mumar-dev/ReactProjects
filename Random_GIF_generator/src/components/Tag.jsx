import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

    function Tags(){

        const[meme, setmeme] = useState("")
        
        const[name, setname] = useState("")

        const[loading, setLoading] = useState(false)

         const api_key = import.meta.env.VITE_RANDOM_GIF_API_KEY;

         const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${name}`;

         async function FetchData() {
            try {
                setLoading(true)
                const response = await axios(url)
                const output = response.data.data.images.downsized_large.url;
                setmeme(output)
                setLoading(false)
                
            } catch (error) {
                console.error("Error fetching GIF:", error)
                
            }
            
         }

         useEffect( ()=>{
            FetchData()
         }, [])

         function ClickHandler(){
            FetchData();
        }

         function ChangeHandler(event){

            setname(event.target.value)

         }

         let show ;

         if(loading){
             show = (
                 <Spinner/>
             )
         }
         else{
             show = (
                 meme
             )
         }


         return(
            <div>

                <h2>Random {name} Meme</h2>
                <img src={show} alt="Tag Meme" srcset="" />
                <input type="text"
                placeholder="Enter A meme Name" 
                onChange={ChangeHandler}
                value={name}/>

                <button onClick={ClickHandler}>Generate</button>

            </div>
         )

    }

export default Tags;