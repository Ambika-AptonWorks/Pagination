import React from 'react';
class Bindevent extends React.Component{
    constructor(props){
        super(props)

        this.state={
            msg:"hi"
        }
    }
    clickHandler=()=>{
        this.setState({
            msg:"goodbye"
        }) 
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}
export default Bindevent;
