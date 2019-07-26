import React, {Component} from 'react';
import Header from "./components/Header/Header"
import Wheel from "./components/Wheel/Wheel"
import Option from "./components/Option/Option"
import Results from "./components/Results/Results"
import './App.css';

class App extends Component {
  state = {
    loggedIn: true,
    animate: false,
    spin: false,
    colorChoice: "",
    winningIcon: "",
    win: false,
    showMsg: false
  };

  winnerHandler = (winningIcon) => {
    this.setState({
      winningIcon: winningIcon
    }, ()=>{
      
    });
    console.log(`the winning icon is ${winningIcon}`)
  };

  //Sets the state of the users choice of color
  optionHandler = (colorChoice) => {
    this.setState({
      colorChoice: colorChoice
    }, ()=>{console.log(this.state.colorChoice)});
  };

  //handles the spin state to control animation. Checks if animation is in progress to stop the user from pressing the spin button
  //while the action is in progress
  spinHandler = () => {
      if(!this.state.spin === true){
      this.setState({
        spin: true
      });
      setTimeout(()=>{
        this.state.winningIcon === this.state.colorChoice ? this.setState({win:true, showMsg: true}) : this.setState({win:false, showMsg: true});

      }, 4000);
      setTimeout(()=> {
        this.setState({
          spin:false,
          showMsg: false
        });
      }, 8000);
    };
  };

  render(){
    return( 
      <div className="App">
        <Header />
        <Wheel spin={this.state.spin} colorChoice={this.state.colorChoice} winningInfo={this.winnerHandler}/>
        <div className="botWrapper">
          <Option click={this.optionHandler} />
          <button id="spinBtn" className="spin" onClick={ this.spinHandler } >Spin!</button>
        </div>
        <Results win={this.state.win} showMsg={this.state.showMsg}/>
      </div>
    )};
}

export default App;