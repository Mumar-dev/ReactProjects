import './App.css';
import React, { useState } from 'react';
import Mycard from './component/Card';
import Trip_data from './Data/Data';

function App() {
  const [tour, setTour] = useState(Trip_data);

  const clickHandler = (id) => {
    setTour(tour.filter(data => data.id !== id));
  };

  return (
    <div>
      <h1>My Tours App</h1>
      <div>
        {
          tour.map((data) => {
            return (
              <Mycard {...data} clickHandler={clickHandler} />
            );
          })
        }
      </div>

    </div>
  );
}

export default App;
