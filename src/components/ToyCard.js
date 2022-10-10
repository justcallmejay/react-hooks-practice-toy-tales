import React, { useState } from "react";

function ToyCard( { toy, setToys, donateToy } ) {

  const [likeCount, setLikeCount] = useState(toy.likes)

  console.log(toy.id)

  function increaseCounter() {
    const increaseLike = likeCount + 1
    setLikeCount(increaseLike)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        likes : increaseLike
    })
    })
  }

  function deleteData() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => donateToy(toy))
  }

  return (
    <div className="card">
    <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likeCount} Likes </p>
      <button className="like-btn" onClick={increaseCounter}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteData}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
