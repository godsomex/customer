import { GET_CUSTOMERS, GET_CUSTOMER_DETAIL } from "../actions/constants";

export const initialState = {
  customers: [],
  customerDetails: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    case GET_CUSTOMER_DETAIL:
      return {
        ...state,
        customerDetails: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default customerReducer;
