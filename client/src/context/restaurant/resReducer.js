import { CREATE_RES, ERROR, GET_MY_RES, CLEAR_RES } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_RES:
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload.restaurant],
        loading: false
      };
    case GET_MY_RES:
      return {
        ...state,
        restaurants: action.payload.restaurant,
        loading: false,
        error: null
      };
    case CLEAR_RES:
      return {
        ...state,
        restaurants: null,
        restaurant: null,
        error: null
      };
    case ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload
      };

    default:
      return state;
  }
};
