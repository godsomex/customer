import { GET_CUSTOMER } from "../actions/constants";

export const initialState = {};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER:
      return Object.assign({}, state, {
        list: action.payload,
        total: action.payload.length,
      });
    default: {
      return state;
    }
  }
};

export default customerReducer;
