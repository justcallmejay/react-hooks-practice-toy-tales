import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

useEffect(() => {
  fetch('http://localhost:3001/toys')
  .then(res => res.json())
  .then(toy => setToys(toy))
},[])

function addNewToy(inputToy) {
  setToys(toy => {
    return [...toy, inputToy]
  })
}

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys={setToys} addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys}/>
    </>
  );
}

export default App;
