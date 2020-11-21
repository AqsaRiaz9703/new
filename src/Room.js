import React, { useState }from 'react';

function Room() {
   const [isLit,setLit] = useState(false);
   const [Age,setAge] = useState(23);
   //const isLet = state[0];
   //const setLit = state[1];
   //console.log("State= ",state);
    //const[islit, setlit] = useState(true);
function updateLit() {
    console.log("Button clicked")
    setLit(!isLit);
}
function updateAge() {
  console.log(" IncreaseAge Button clicked")
  setAge(Age+1);
}
  return (
    <div>
      This room is {isLit? "Lit": "Dark"}
      <br/>
      Age:{Age}
      <br/>
      <button onClick ={updateLit}>Trigger button</button>
      <br/>
      <button onClick ={updateAge}> UpdateAge Trigger button</button>
    </div>
  );
}

export default Room;