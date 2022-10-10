import React, { useState } from "react";

const newToy = {
  name: '',
  image: '',
}

function ToyForm( { addNewToy } ) {

  const [addToy, setAddToy] = useState(newToy)

  const onHandleForm = (e) => {
    const { name, value } = e.target;
//it is setAddToy setter function, not setToy from App.js
    setAddToy(addToy => {
      return {
        ...addToy,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewToy(addToy);
    // setAddToy(newToy);
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(addToy)
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={addToy.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={onHandleForm}
        />
        <br />
        <input
          type="text"
          name="image"
          value={addToy.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={onHandleForm}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
