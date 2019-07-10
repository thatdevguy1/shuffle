import React, {Component} from 'react';
import Header from "./components/Header/Header"
import Wheel from "./components/Wheel/Wheel"
import Option from "./components/Option/Option"
import './App.css';

class App extends Component {
  state = {
    loggedIn: true,
    animate: false,
    spin: false
  };

  spinHandler = () => {
    this.setState({
      spin: true
    });
    setTimeout(()=> {
      this.setState({
        spin:false
      }); 
    }, 8000);
  }

  render(){
    return( 
      <div className="App">
        <Header />
        <Wheel spin={this.state.spin} />
        <div className="botWrapper">
          <Option />
          <button id="spinBtn" className="spin" onClick={ this.spinHandler } >Spin!</button>
        </div>
      </div>
    )};
}

export default App;
