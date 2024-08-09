import React from 'react'

function Childcomponent(props) {
  return (
    <div>
    <button onClick={props.greetHandler}>GreetParent </button>
</div>
  )
}

export default Childcomponent
