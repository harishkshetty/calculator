import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from '../src/components/Keypad/index';
import Result from './components/Result/index'
class App extends Component {
constructor(){
  super();
  this.state={output:""}
}
  caculate=(name)=>{
    console.log(name);
    if(name==="="){
      this.manipulate();
    }
    else if(name==="CE"){
      this.removal();
    }
    else if(name==="C"){
      this.reset();
    }
    else{
      this.setState({output:this.state.output+name})
    }
  }

  manipulate=()=>{
    const {output}=this.state;
    let finaloutput="";
    if(output.includes('--'||'++')){
      alert("d")
finaloutput=this.state.output.replace('--','+');

    }
    else{
      finaloutput=output;
    }
    try{
      this.setState({
        output:(eval(finaloutput))
      })
    }
    catch(e){
      this.setState({
        output:"Error"
      })
    }
  }
  removal=()=>{
    this.setState({output:this.state.output.slice(0,-1)})
  }
  reset=()=>{
this.setState({output:""})
  }
  render() {
    const {output}=this.state;
    return (
      <div className="App">
      <Result result={output}/>
        <Keypad calc={this.caculate}/>
      </div>
    );
  }
}

export default App;
