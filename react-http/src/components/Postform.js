import React, { Component } from 'react'
import axios from 'axios'

class Postform extends Component {
 
 constructor(props) {
   super(props)
 
   this.state = {
      userId:'',
      title: '',
      body: ''
   }
 }
 
 changeHandler = (e)=>{
      this.setState(
        {[e.target.name] : e.target.value}
      )
 }

 submitHandler = (e) =>{
    e.preventDefault();
    console.log(this.state)
    axios.post('https://jsoplaceholder.typicode.com/posts')
    .then(response =>{
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
 }
 
    render() {
    const {userId, title, body} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
        <div>
          <label>UserId</label>
          <input type='text' name='userId' value={userId} 
          onChange={this.changeHandler}></input>
        </div>
        <div>
          <label>username</label>
          <input type='text' name='title' value={title}
          onChange={this.changeHandler}></input>
        </div>
        <div>
          <label>body</label>
          <input type='text' name={body}
          onChange={this.changeHandler}></input>
        </div>
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Postform
