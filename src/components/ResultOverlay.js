import React from 'react';


const ResultOverlay = (props)=>{
  let resultMessage = props.correct ? "Correct! The answer was..." : "Incorrect! The answer was...";
  let overlayClass = props.answered ? "question__overlay question__overlay--show" : "question__overlay question__overlay--hide";
  return (
    <div className={overlayClass}>
      <p className="question__result-message">{resultMessage}</p>
      <p className="question__result-answer">{props.answer}</p>
    </div>
  )
}

export default ResultOverlay;
