import React, { Component } from 'react'

export class Binding extends Component{
    constructor(props) {
      super(props)

     this.state = {
       message: 'Good morning! we are doing react' 
    }
    this.clickHandler = this.clickHandler.bind(this);
}

clickHandler(){
    this.setState(
        {
            message: 'In thre afternoon we will move to spring'
        }
    )

}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Click Me!</button>
        
      </div>
    )
  }
}

export default Binding
