import { useReducer } from "react";
import axios from "axios";

import ResContext from "./resContext";
import ResReducer from "./resReducer";
import { CREATE_RES, ERROR } from "../types";

const ResState = props => {
  const initialState = {
    restaurants: null,
    restaurant: null,
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

  return (
    <ResContext.Provider
      value={{
        restaurants: state.restaurants,
        error: state.error,
        createRes
      }}
    >
      {props.children}
    </ResContext.Provider>
  );
};

export default ResState;
