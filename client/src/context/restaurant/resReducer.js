import {
  CREATE_RES,
  ERROR,
  GET_MY_RES,
  CLEAR_RES,
  GET_MY_DISHES,
  GET_ALL_RES,
  SET_LOADING
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_RES:
      return {
        ...state,
        restaurants: action.payload.restaurants,
        loading: false,
        dishes: null
      };
    case CREATE_RES:
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload.restaurant]
      };
    case GET_MY_RES:
      return {
        ...state,
        restaurants: action.payload.restaurant,
        loading: false,
        error: null
      };
    case GET_MY_DISHES:
      return {
        ...state,
        restaurant: action.payload.restaurant,
        dishes: action.payload.restaurant.dishes,
        loading: false,
        error: null
      };
    case CLEAR_RES:
      return {
        ...state,
        restaurants: null,
        dishes: null,
        restaurant: null,
        error: null
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
