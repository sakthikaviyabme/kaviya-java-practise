import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

export class Parentgreet extends Component {
    constructor(props){
        super(props)
       this.state ={
            parentName: 'Father'
      }
      this.greetParent = this.greetParent.bind(this)
}

greetParent=() => {
  alert(`Hello ${this.state.parentName}`)
 this.setState({
      parentName: 'Mother'
})
}

render(){ 
return(
<div>  
   <Childcomponent greetHandler = {this.greetParent} />
</div>
)}
}

export default Parentgreet
