import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function Random() {
    const api_key = import.meta.env.VITE_RANDOM_GIF_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

    const [meme, setMeme] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try {
            setLoading(true);
            const response = await axios(url);
            const output = response.data.data.images.downsized_large.url;
            console.log(output);
            setMeme(output);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching GIF:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    function ClickHandler() {
        fetchData();
    }

    let show;

    if (loading) {
        show = <Spinner />;
    } else {
        show = meme 
    }

    return (
        <div className="p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">A Random Gif</h2>
            <div className="mb-4"><img src={meme} /></div>
            <button 
                onClick={ClickHandler} 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Generate
            </button>
        </div>
    );
}

export default Random;
