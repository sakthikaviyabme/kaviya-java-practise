import React from 'react'

 const Welcome = ({myname},props) => {
  return (   
     <div>
 <h1>Welcome {myname} who is a {props.profession} </h1>
       {props.children}
    </div>
  )
}

export default Welcome
