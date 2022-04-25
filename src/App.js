import React from "react";
import {connect} from 'react-redux'

const App=({player1,player2})=>{
  return(
  <div>
      <center>
            <h1>Player details</h1>
            <p>Name:{player1.name}</p> | {""} <p>Score:{player1.score}</p> <hr/>
            <p>Name:{player2.name}</p> | {""} <p>Score:{player2.score}</p>
        </center>
  </div>
  );
}

const mapStateToProps =state=>({
  player1:state.person1,
  player2:state.person2
})
export default connect(mapStateToProps)(App);
