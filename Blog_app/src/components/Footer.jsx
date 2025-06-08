import React from 'react'
import { AppContext } from "../context/AppContext";
import { useContext } from 'react';

function Footer ()  {

    const {totalpages, currentpage, PreviousHandler, NextHandler } = useContext(AppContext);

  return (
    <div>
        <button onClick={PreviousHandler}> Previous </button>
        <button onClick={NextHandler}> Next </button>

        <div>
            page {currentpage} of {totalpages}
        </div>
    </div>
  )
}

export default Footer