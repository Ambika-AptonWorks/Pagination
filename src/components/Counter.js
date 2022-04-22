
import React from 'react';

class Counter extends React.Component {
    constructor(){
        super()
        this.state ={
            count:0
        }
    }
    increment(){
        this.setState(prevState => ({
            count: prevState.count+1
        }))
        console.log(this.state.count)
    }
    incrementfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return(
            <div>
                <div>count- {this.state.count}</div>
                <button onClick={()=> this.incrementfive()}>increment</button>
            </div>
        )
    }
}


export default Counter;