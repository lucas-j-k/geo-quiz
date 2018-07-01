import React from 'react';


const Scoreboard = (props)=>{
  return (
    <div className="scoreboard">
      <p className={props.correctClass}>Correct: {props.correctAnswers}</p>
      <p className={props.incorrectClass}>Incorrect: {props.incorrectAnswers}</p>
    </div>
  )
}

export default Scoreboard;
