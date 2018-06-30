import React from 'react';


const Scoreboard = (props)=>{
  return (
    <div className="scoreboard">
      <p className="scoreboard__correct">Correct: {props.correctAnswers}</p>
      <p className="scoreboard__incorrect">Incorrect: {props.incorrectAnswers}</p>
    </div>
  )
}

export default Scoreboard;
