import { GET_CUSTOMER, SET_LOADING, CUSTOMER_ERROR } from "./constants";

export const getCustomer = () => async (dispatch) => {
  try {
    setLoading();

    const result = await fetch("http://localhost:9000/", {
      method: "GET",
    });

    const data = await result.json();

    dispatch({
      type: GET_CUSTOMER,
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
