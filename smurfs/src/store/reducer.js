import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    FETCH_SMURF,
    FETCH_SMURF_FAIL
  } from './action';
  
  const initialState = {
    smurf: [],
    isFetching: false,
    error: ''
  };
  
  const reducer = (state = initialState, action) => {
    
    switch (action.type) {
      case FETCH_SMURF_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCH_SMURF_SUCCESS:
        
        return {
          ...state,
          smurf: action.payload,
          isFetching: false,
          error: ''
        };
      case FETCH_SMURF_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload

        };case FETCH_SMURF:
        return {
          ...state,
          smurf: [...state.smurf, action.payload],
          isFetching: false,
          error: ''
        };
      case FETCH_SMURF_FAIL:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;