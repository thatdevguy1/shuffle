import React, {Component} from 'react';
import Chatbox from './ChatBox/Chatbox'
import Messagebox from './MessageBox/Messagebox'
import './App.css';

class App extends Component {
  state = {
    messages : [
      "Toronto in 6!",
      "Lets go raps",
      "Something something raps something something"
    ]
  };

  render(){
    return( 
      <div className="App">
        <Chatbox></Chatbox>
        <Messagebox value={ this.state.messages }></Messagebox>
      </div>
    )};
}

export default App;
