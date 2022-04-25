const initialState={
    name:'smith',
    score:45
}

export default function Player1Reducer(state=initialState,action){
   const{type,payload}=action
   switch(type){
      case'INC_PLAYTER1-SCORE':
         return{...state,score:state.score+1}
      case 'DEC_PLAYER1_SCORE':
         return{...state,score:state.score-1}
      default:
          return state;
   }
}