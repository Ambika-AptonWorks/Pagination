import React from 'react';
import Childcomponent from './Childcomponent';

class Parentcomponent extends React.Component{
    constructor(){
        super()
        this.state={
            parentname:"mahesh"
        }
        this.greetparent=this.greetparent.bind(this)
    }
    greetparent(){
        alert('Hello'+this.state.parentname)
    }
    render(){
        return(
            <div>
               <Childcomponent greetHandler={this.greetparent}/>
            </div>
        )
    }
}
 export default Parentcomponent;
