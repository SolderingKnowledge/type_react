import React, {Component} from 'react';
import Detail from "./components/Detail";
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Detail name="me"  quantity={1}></Detail>
      </div>
    )
  }
}

export default App;
