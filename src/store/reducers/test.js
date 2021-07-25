import * as actions from "../actions/actionTypes"
import {updateObject} from "../utilites"

const initialState = {
    description: "nothing"
}


function reducerTest(state , action){
        return updateObject( state , {
            description: action.description,
        })
}



const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.TEST:
        return reducerTest(state, action);
   
      default:
        return state;
    }
  };
  
  export default testReducer;