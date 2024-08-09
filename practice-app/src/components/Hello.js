import React, { Component } from 'react'

 class Hello extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        message: "This is a full stack training",
        count: 0
     }
   }
   
   changeMessage(){
     this.setState(
      {
        message : "You are inside the training"
      }
     )
     this.state.message="hello";

   }


   changeCounter(){
    this.setState(
    
      (prevState) => ({
        count: prevState.count+1})
     
    ) //Asynchrouns
    console.log(this.state.count) //synchronuous
  }

  incrementFive(){

    this.changeCounter();
    this.changeCounter();
    this.changeCounter();
    this.changeCounter();
    this.changeCounter();

  }


  render() {
    return (
      <div>
    <h1> {this.state.message} </h1>
     <button onClick={()=>this.changeMessage()}>Click</button>
     <h1>{this.state.count}</h1>
     <button onClick={()=>this.incrementFive()}>Counter</button>
      </div>
    )
  }
}

export default Hello
