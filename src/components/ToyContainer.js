import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, setToys } ) {

    function donateToy(item) {
    const donateToyStory = toys.filter(toy => toy.id !== item.id)
    return setToys(donateToyStory)
  }

  return (
    <div id="toy-collection">
      {toys.map(toy =>
      <ToyCard toy={toy} setToys={setToys} donateToy={donateToy}/>)
      }</div>
  );
}

export default ToyContainer;
