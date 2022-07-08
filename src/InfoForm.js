import React, { useState } from 'react'


function InfoForm({userInput, storeInput}){
  const [inputData, setInputData]=useState(userInput)

  function handleChange(e){
    e.persist()
    setInputData(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    storeInput(inputData)
  }
  
  return (
    <div className="App">
      <label>Last name:</label>
      <input onChange={handleChange} type="text" id="lname" name="lname" value={inputData}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default InfoForm;
