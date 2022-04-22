import React, { createElement } from 'react'


 class Message extends React.Component{
     render(){
        const {name,surname}= this.props
         return(
                <div>
                    <h1>welcome {name}{surname}</h1>
                </div>
         )
     }

 }

export default Message;