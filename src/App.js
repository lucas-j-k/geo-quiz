import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//Components:
import Quiz from './components/Quiz';
import StartScreen from './components/StartScreen';
import HeaderBar from './components/HeaderBar';

class App extends React.Component {
  //Set state inside constructor:
  constructor(props){
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.state = {
      countryData: [],
      currentQuestion:{
        country:"",
        answers:[],
        correct:""
      },
      running:false,
    }
  }
  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital')
    .then((response)=>{
      let returnedData = response.data
      this.setState({
        countryData:returnedData
      });
    })
  }

  //Start the quiz by setting the running state to true
  startQuiz(){
    this.nextQuestion()
    this.setState({
      running:true
    })
  }
  //Generate the question and some random dummy answers:
  nextQuestion(){
    let answerIndexes = [];
    let iterator = 1;
    while(iterator<=4){
      let randomNo = Math.floor(Math.random() * 250);
      if(answerIndexes.indexOf(randomNo) === -1 && this.state.countryData[randomNo].capital !== ""){
        answerIndexes.push(randomNo);
        iterator++;
      }
    }
    let randomQuestionIndex = Math.floor(Math.random() * 4);
    let questionIndex = answerIndexes[randomQuestionIndex];
    let answers = [];
    for(let i=0; i<4;i++){
      let indexToSeek = answerIndexes[i];
      answers.push(this.state.countryData[indexToSeek].capital)
    }
    this.setState({
      currentQuestion:{
        country:this.state.countryData[questionIndex].name,
        answers:answers,
        running:true,
        correct:this.state.countryData[questionIndex].capital
      },

    });
  }
  //Render the main component to the DOM:
  render(){
    let content = this.state.running?
        (
            <Quiz
            country={this.state.currentQuestion.country}
            answers={this.state.currentQuestion.answers}
            correct={this.state.currentQuestion.correct}
            nextQuestion={this.nextQuestion}
          />
        ):
        (<StartScreen
          startQuiz={this.startQuiz}
        />);
    return (
      <div className="container">
        <HeaderBar />
        {content}
      </div>
    );
  }
}

export default App;
