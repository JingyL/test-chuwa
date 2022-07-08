import React from 'react';

function Output({userInput}){

  return (
    <div>
      {userInput != ""
      ? <p>{userInput}</p>
      : <></>}
    </div>
  )
}

export default Output;
