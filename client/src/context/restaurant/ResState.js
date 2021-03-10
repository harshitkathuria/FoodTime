import { useReducer } from "react";
import axios from "axios";

import ResContext from "./resContext";
import ResReducer from "./resReducer";
import { CLEAR_RES, CREATE_RES, ERROR, GET_MY_RES } from "../types";

const ResState = props => {
  const initialState = {
    restaurants: null,
    restaurant: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(ResReducer, initialState);

  // Create Restaurant
  const createRes = async resData => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const res = await axios.post("/api/res", resData, config);
      dispatch({
        type: CREATE_RES,
        payload: res.data.data
      });
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({
        type: ERROR,
        payload: err.response.data.msg
      });
    }
  };

  // Get all restaurants of user
  const getMyRes = async () => {
    try {
      const res = await axios.get("/api/res/my");
      dispatch({
        type: GET_MY_RES,
        payload: res.data.data
      });
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch({
        type: ERROR,
        payload: err.response.data.msg
      });
    }
  };

  // Clear restaurants
  const clearRes = () => {
    dispatch({ type: CLEAR_RES });
  };

  return (
    <ResContext.Provider
      value={{
        restaurants: state.restaurants,
        restaurant: state.restaurant,
        error: state.error,
        createRes,
        getMyRes,
        clearRes
      }}
    >
      {props.children}
    </ResContext.Provider>
  );
};

export default ResState;
