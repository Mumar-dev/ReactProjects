import { useState } from "react";

function Mycard({ id, price, city, Desc, clickHandler }) {

  let info = Desc.substring(0, 150);
  const [info1, setInfo] = useState(info);
  const [replace, setReplace] = useState('show more');

  function changeHandler() {
    if (replace === 'show more') {
      setReplace('show less');
      setInfo(Desc);
    } else {
      setReplace('show more');
      setInfo(info);
    }
  }

  return (
    <div>
      <img src="" alt="Placed soon" />
      <h2>{price}</h2>
      <h2>{city}</h2>
      <p>{info1}...
        <span onClick={changeHandler}>{replace}</span>
      </p>
      <button onClick={() => clickHandler(id)}>Not Interested</button>
    </div>
  );
}

export default Mycard;
