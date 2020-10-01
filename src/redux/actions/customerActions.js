import {
  GET_CUSTOMERS,
  GET_CUSTOMER_DETAIL,
  SET_LOADING,
  CUSTOMER_ERROR,
} from "./constants";

const GET = "GET";

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
