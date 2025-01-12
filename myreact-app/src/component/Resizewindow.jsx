import { useState } from "react";
import { useEffect } from "react";
    function Resizewindow(){

        const [window_width, setwindow_width] = useState(window.innerWidth);

        const [window_height, setwindow_height] = useState(window.innerHeight);

        function Changesize(){
            setwindow_height(window.innerHeight);
            setwindow_width(window.innerWidth);

        }

        useEffect( () => 
        {
            window.addEventListener("resize", Changesize)
        }, [])

        return(
            <div>
                <h1>the width of vewport is {window_width}</h1>
                <br></br>
                <h1>the height of viewport is {window_height}</h1>
            </div>
        )

    }

    export default Resizewindow;