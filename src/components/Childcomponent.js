import React from 'react';
function Childcomponent(props){
    return(
        <div> 
            <button onClick={props.greetHandler}>greetparent</button>
        </div>
    )

}
export default Childcomponent;