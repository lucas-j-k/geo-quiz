import React, { Component } from 'react';

//components
import Scoreboard from './Scoreboard';
import Answer from './Answer';


class Quiz extends Component {
  constructor(props){
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.state = {
      checkedAnswer:'',
      answered:false,
      correct:false,
      correctAnswers:0,
      incorrectAnswers:0
    }
  }
  componentWillReceiveProps(){
    this.setState({checkedAnswer:"", answered:false})
  }
  handleFormSubmit(event){
    event.preventDefault();
    if(this.state.checkedAnswer === this.props.correct){
      this.setState(function(prevState, props){
        return {
          correct:true,
          answered:true,
          correctAnswers:prevState.correctAnswers +1,
        }
      })
    } else {
      this.setState(function(prevState, props){
        return {
          correct:false,
          answered:true,
          incorrectAnswers:prevState.incorrectAnswers +1,
        }
      })
    }
    console.log(this.state);
  }
  handleAnswerChange(event){
    this.setState({
      checkedAnswer:event.target.value
    })
  }
  render(){
    let status = this.state.correct?
        (<p className="question__feedback question__feedback--correct">Correct!</p>):
        (<p className="question__feedback question__feedback--wrong">Wrong!</p>);
    let button = (<a href="#" className="question__button question__button--next" onClick={this.props.nextQuestion}>Next  <i className="fa fa-caret-right"></i></a>);
    let statusBar = this.state.answered?
        (<div className="question__statusBar">{status}{button}</div>):
        ("");
    let submit = this.state.answered?
        (""):
        (<input className="question__button, button question__input--submit" type="submit" value="Submit" />);
    let resultMessage = this.state.correct ? "Congratulations the answer was..." : "Unfortunately, the answer was...";
    let overlayClass = this.state.answered ? "question__overlay question__overlay--show" : "question__overlay question__overlay--hide";
    let questionList = this.props.answers.map((answer, index)=>{
      return <Answer
               answer={answer}
               key={index}
               checkedAnswer={this.state.checkedAnswer}
               handleAnswerChange={this.handleAnswerChange}
               disabled={this.state.answered}
             />
    })
    return (
      <div className="question">
        <Scoreboard
              correctAnswers={this.state.correctAnswers}
              incorrectAnswers={this.state.incorrectAnswers}
            />
        <h3 className="question__header">{this.props.country}</h3>
        <form className="question__form" onSubmit={this.handleFormSubmit}>
          <div className={overlayClass}>{resultMessage}{this.props.correct}</div>
          {questionList}
          {submit}
        </form>
        <div className="question__footer">{statusBar}</div>
      </div>
    )
  }
}

export default Quiz;
