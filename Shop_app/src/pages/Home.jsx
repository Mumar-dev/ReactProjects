import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/product';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading]  = useState(false)
    const [posts, setPosts] = useState([])

    async function FetchProductDAta() {

        setLoading(true)

        try {
            const response = await fetch(API_URL)
            const result = await response.json();
            setPosts(result)
            console.log(result)
        } catch (error) {
            console.log("Error While Fetching Data", error)
        }

        setLoading(false)    
    }

    useEffect ( () =>{
        FetchProductDAta()
    },[] )
  return (
    <div>
        {
            loading ? (<Spinner/>) : (
                posts.map( (post)=>(
                    <Product key={post.id} data={post}/>
                 ) )
            )
        }
    </div>
  )
}

export default Home