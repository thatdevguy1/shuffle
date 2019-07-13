import React, {Component} from 'react';
import Header from "./components/Header/Header"
import Wheel from "./components/Wheel/Wheel"
import Option from "./components/Option/Option"
import './App.css';

class App extends Component {
  state = {
    loggedIn: true,
    animate: false,
    spin: false,
    colorChoice: ""
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
      setTimeout(()=> {
        this.setState({
          spin:false
        }); 
      }, 8000);
    };
  };

  render(){
    return( 
      <div className="App">
        <Header />
        <Wheel spin={this.state.spin} />
        <div className="botWrapper">
          <Option click={this.optionHandler} />
          <button id="spinBtn" className="spin" onClick={ this.spinHandler } >Spin!</button>
        </div>
      </div>
    )};
}

export default App;