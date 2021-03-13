import { useReducer } from "react";
import axios from "axios";

import ResContext from "./resContext";
import ResReducer from "./resReducer";
import {
  CLEAR_RES,
  CREATE_RES,
  SUBMIT_ORDER,
  ERROR,
  GET_ALL_RES,
  GET_MY_DISHES,
  GET_MY_RES,
  SET_LOADING,
  GET_MY_ORDERS
} from "../types";

const ResState = props => {
  const initialState = {
    restaurants: null,
    restaurant: null,
    dishes: null,
    orders: null,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(ResReducer, initialState);

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // Get all Restaurants
  const getAllRes = async () => {
    setLoading();
    try {
      const res = await axios.get("/api/res");
      dispatch({
        type: GET_ALL_RES,
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

  // Submit Order
  const submitOrder = async orderData => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const res = await axios.post("/api/order", orderData, config);
      dispatch({
        type: SUBMIT_ORDER,
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

  // Get all orders of the user
  const getMyOrders = async () => {
    setLoading();
    try {
      const res = await axios.get("/api/order/my");
      dispatch({
        type: GET_MY_ORDERS,
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
    setLoading();
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

  // Get dishes of the restaurant
  const getDishes = async id => {
    setLoading();
    try {
      const res = await axios.get(`/api/res/${id}`);
      dispatch({
        type: GET_MY_DISHES,
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
        loading: state.loading,
        error: state.error,
        orders: state.orders,
        dishes: state.dishes,
        getAllRes,
        createRes,
        submitOrder,
        getMyOrders,
        getMyRes,
        clearRes,
        getDishes,
        setLoading
      }}
    >
      {props.children}
    </ResContext.Provider>
  );
};

export default ResState;
