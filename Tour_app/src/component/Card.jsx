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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-5 my-5 mx-auto">
      <img src="" alt="Placed soon" className="w-full h-48 object-cover mb-4 rounded-md" />
      <h2 className="text-2xl font-semibold text-gray-800">{price}</h2>
      <h3 className="text-xl text-gray-600">{city}</h3>
      <p className="text-gray-700 text-base mt-2">
        {info1}...
        <span 
          onClick={changeHandler} 
          className="text-blue-500 cursor-pointer hover:underline ml-1"
        >
          {replace}
        </span>
      </p>
      <button 
        onClick={() => clickHandler(id)} 
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Not Interested
      </button>
    </div>
  );
}

export default Mycard;
