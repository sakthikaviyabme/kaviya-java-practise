import axios from 'axios'

class PostList extends Component{

constructor(props){
   super(props)
  
   this.state ={
      posts: [],
      error : ' '
   }

}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts') //axios is a promise based library
  .then(response => {
    console.log(response)
    this.setState({posts: response.data})
  })
  .catch(error =>{
     console.log(error)
      this.setState({error: 'error retrieving data'})
  })
}

render(){
  const { posts, errorMsg } = this.state //destructuring the state property
   return (
      <div >
          <h1>List of posts:</h1>
         {
               posts.length ? 
               posts.map(post => <div key={posts.id}>{posts.title}</div>):
               null              
         }
         {errorMsg ? <div>{errorMsg}</div> : null }
     </div>
  )

}
}