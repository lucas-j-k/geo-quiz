import React from 'react';


const Answer = (props)=>{
  return (
    <label className="question__option">
      <input
        type="radio"
        className="question__radio"
        value={props.answer}
        name="answer"
        checked={props.checkedAnswer === props.answer}
        id={"answer-" + props.answer}
        onChange={props.handleAnswerChange}
        disabled={props.disabled}
      />
      {props.answer}
    </label>
  )
}

export default Answer;
