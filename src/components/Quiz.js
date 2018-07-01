import React, { Component } from 'react';

//components
import Scoreboard from './Scoreboard';
import Answer from './Answer';
import ResultOverlay from './ResultOverlay';


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
      incorrectAnswers:0,
      correctClass:"scoreboard__correct",
      incorrectClass:"scoreboard__incorrect",
      disableFormSubmit: true
    }
  }
  componentWillReceiveProps(){
    this.setState({
      checkedAnswer:"",
      answered:false,
      disableFormSubmit: true,
      correctClass:"scoreboard__correct",
      incorrectClass:"scoreboard__incorrect"
    })
    console.log("Will receive props")
  }
  handleFormSubmit(event){
    event.preventDefault();
    if(this.state.checkedAnswer === this.props.correct){
      this.setState(function(prevState, props){
        return {
          correct:true,
          answered:true,
          correctAnswers:prevState.correctAnswers +1,
          correctClass:"scoreboard__correct score-bump",
        }
      })
    } else {
      this.setState(function(prevState, props){
        return {
          correct:false,
          answered:true,
          incorrectAnswers:prevState.incorrectAnswers +1,
          incorrectClass:"scoreboard__incorrect score-bump",
        }
      })
    }
  }
  handleAnswerChange(event){
    this.setState({
      checkedAnswer:event.target.value,
      disableFormSubmit: false
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
        (<input className="question__button, button question__input--submit" type="submit" value="Submit" disabled={this.state.disableFormSubmit} />);
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
              correct={this.state.correct}
              correctClass={this.state.correctClass}
              incorrectClass={this.state.incorrectClass}
            />
        <h3 className="question__header">{this.props.country}</h3>
        <form className="question__form" onSubmit={this.handleFormSubmit}>
          <ResultOverlay correct={this.state.correct} answer={this.props.correct} answered={this.state.answered} />
          {questionList}
          {submit}
        </form>
        <div className="question__footer">{statusBar}</div>
      </div>
    )
  }
}

export default Quiz;
