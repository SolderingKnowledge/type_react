import React, {Component} from 'react';
// import Detail from "./components/Detail";
import './App.css';

class App extends Component <any, any> {
  constructor(props:any){
    super(props);
    this.state = {
      name: ""
    }
  }
  change = (e:any)=>{
    e.preventDefault()
    this.setState({
    [e.target.name] : e.target.value
    })
  }
  render(){
    return(
      <div>
        <form autoComplete="off">
          <p>{this.state.name}</p>
          <input name="name" type = "text"  onChange = {this.change} />
          <input type= "submit" />
        </form>
      </div>
    )
  }
}

export default App;
