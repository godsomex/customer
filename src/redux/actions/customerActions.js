import { GET_CUSTOMER } from "./constants";

export const getCustomer = () => (dispatch) => {
  dispatch({
    type: GET_CUSTOMER,
  });
};
