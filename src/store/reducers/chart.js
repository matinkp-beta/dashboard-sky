import * as actionsType from "../actions/actionTypes"
import { updateObject } from "../utilites"

const initialState ={
    data:[]
}

function chartData(state , action) {
    return updateObject ( state, {
        data:action.data,
    })
    
}

const chartReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionsType.ChartSucess:
        return chartData(state, action);
   
      default:
        return state;
    }
  };
  
  export default chartReducer;