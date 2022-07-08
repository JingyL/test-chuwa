import React, { useState } from 'react';
import './App.css';
import InfoForm from './InfoForm';
import Output from './Output';


function App() {
  const [userInput, setInput]= useState("")
  
  function storeInput(inputValue){
    console.log(inputValue)
    setInput(inputValue)
  }

  return (
    <>
      <InfoForm userInput={userInput} storeInput={storeInput}/>
      <Output userInput={userInput}/>
    </>
  );
}

export default App;
