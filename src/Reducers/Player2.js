const initialState={
    name:'jhon',
    score:30
}

export default function Player2Reducer(state=initialState,action){
   const{type,payload}=action
   switch(type){
      case'INC_PLAYTER2-SCORE':
         return{...state,score:state.score+1}
      case 'DEC_PLAYER2_SCORE':
         return{...state,score:state.score-1}
      default:
          return state;
   }
}