import React from 'react';


function StartScreen(props){
  return (
    <div className="startScreen box-shadow">
      <p className="startScreen__heading">Capital Cities</p>
      <p className="startScreen__intro">
        How well do you know the capital cities of the world?<br />
        Click below to start the quiz
      </p>
      <button className="startScreen__startButton button" onClick={props.startQuiz}>Start</button>
    </div>
  )
}


export default StartScreen;
