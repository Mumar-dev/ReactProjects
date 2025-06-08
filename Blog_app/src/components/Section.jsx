import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"; // ✅ Correct Import

function Section() {
  const { loading, posts } = useContext(AppContext); // ✅ Correct Context Usage

  return (
    <div>
      {loading ? (
        <h2>Loading....</h2>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>Posted on <span>{post.date}</span></p>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Section;
