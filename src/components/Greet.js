import React from 'react';

const Greet= props => {
  const {name,surname}=props
    return(
      <div>
        <h1> Hi!{name}{surname}</h1>
      </div>
    )

}
  export default Greet;