import {
  GET_CUSTOMERS,
  GET_CUSTOMER_DETAIL,
  SET_LOADING,
  CUSTOMER_ERROR,
  ADD_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER,
} from "./constants";

const GET = "GET";
const POST = "POST";
const DELETE = "DELETE";

//GET  CUSTOMERS
export const getCustomers = () => async (dispatch) => {
  try {
    setLoading();

    const result = await fetch("http://localhost:9000/", {
      method: GET,
    });

    const data = await result.json();

    dispatch({
      type: GET_CUSTOMERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: err.response.data,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// Get CUSTOMER DETAILS
export const getCustomer = (id) => async (dispatch) => {
  try {
    const result = await fetch(`http://localhost:9000/${id}`, {
      method: GET,
    });

    const data = await result.json();

    dispatch({
      type: GET_CUSTOMER_DETAIL,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: err.response,
    });
  }
};

// Add customers
export const addCustomer = (formData) => async (dispatch) => {
  const body = JSON.stringify(formData);
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method: POST,
    body,
  };

  try {
    const result = await fetch("http://localhost:9000/", config);
    const data = await result.json();
    dispatch({
      type: ADD_CUSTOMER_SUCCESS,
      payload: data,
    });

    getCustomers();
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: err.response,
    });
  }
};

//Delete Customers
export const deleteCustomer = (id) => async (dispatch) => {
  try {
    const result = await fetch(`http://localhost:9000/${id}`, {
      method: DELETE,
    });

    const data = await result.json();

    dispatch({
      type: DELETE_CUSTOMER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: err.response,
    });
  }
};
