import { CREATE_RES, ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_RES:
      return {
        ...state,
        restaurant: action.payload.restaurant
      };

    case ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
