import React, { createContext, useState, useEffect } from "react";
import { BaseUrl } from "../ApiUrl";
import axios from "axios";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [totalpages, setTotalpages] = useState(null);
  const [posts, setPosts] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);

  async function FetchData() {
    setLoading(true);
    try {
      const result = await axios(`${BaseUrl}?page=${currentpage}`);
      console.log("Fetched Data:", result.data); 

      setTotalpages(result.data.totalPages);
      setPosts(result.data.posts);
      setCurrentpage(result.data.page);
    } 
    catch (error) {
      console.error("Error while fetching data:", error);
    } 
    finally {
      setLoading(false); 
    }
  }


  useEffect(() => {
    FetchData();
  }, [currentpage]);

  function PreviousHandler () {

    setCurrentpage(currentpage - 1);

  }

  function NextHandler () {

    setCurrentpage(currentpage + 1);

  }

  const AppContextData = {
    loading,
    totalpages,
    posts,
    currentpage,
    setCurrentpage,
    PreviousHandler,
    NextHandler
    

  };

  return (
    <AppContext.Provider value={AppContextData}>
      {children}
    </AppContext.Provider>
  );
}
