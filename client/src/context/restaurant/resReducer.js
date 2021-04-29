import {
  CREATE_RES,
  UPDATE_RESTAURANT,
  SUBMIT_ORDER,
  ERROR,
  GET_MY_ORDERS,
  GET_MY_RES,
  CLEAR_RES,
  GET_MY_DISHES,
  GET_ALL_RES,
  SET_LOADING,
  CLEAR_RESTAURANT,
  SET_RESTAURANT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_RES:
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload.restaurant],
        orders: null
      };
    case UPDATE_RESTAURANT:
      return {
        ...state,
        restaurants: state.restaurants.map(restaurant =>
          restaurant._id === action.payload.restaurant._id
            ? action.payload.restaurant
            : restaurant
        ),
        restaurant: null,
        loading: false
      };
    case SUBMIT_ORDER:
      return state;
    case GET_ALL_RES:
      return {
        ...state,
        restaurants: action.payload.restaurants,
        loading: false,
        dishes: null,
        orders: null
      };
    case GET_MY_RES:
      return {
        ...state,
        restaurants: action.payload.restaurant,
        loading: false,
        error: null,
        orders: null
      };
    case GET_MY_DISHES:
      return {
        ...state,
        restaurant: action.payload.restaurant,
        dishes: action.payload.restaurant.dishes,
        loading: false,
        error: null,
        orders: null
      };
    case GET_MY_ORDERS:
      return {
        ...state,
        orders: action.payload.orders,
        loading: false,
        error: null
      };
    case SET_RESTAURANT:
      return {
        ...state,
        loading: false,
        restaurant: action.payload
      };
    case CLEAR_RES:
      return {
        ...state,
        restaurants: null,
        dishes: null,
        restaurant: null,
        error: null,
        orders: null
      };
    case CLEAR_RESTAURANT:
      return {
        ...state,
        restaurant: null
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
