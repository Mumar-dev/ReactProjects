import React, { useState } from "react";
import testimonials from "../data"; 

function Testimonial() {
  
  const [index, setIndex] = useState(0);

  function NextHandler() {
    
    if (index >= testimonials.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function PreviousHandler() {
    
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      
      <img src={testimonials[index].image} alt={testimonials[index].name} />
      <h1>{testimonials[index].name}</h1>
      <h3>{testimonials[index].position}</h3>
      <h5>{testimonials[index].company}</h5>
      <p>{testimonials[index].testimonial}</p>

      <div>
        
        <button onClick={NextHandler}>Next</button>
        <button onClick={PreviousHandler}>Previous</button>

      </div>
    </div>
  );
}

export default Testimonial;
