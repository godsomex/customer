import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Details from "./Details";
import { initialState } from "../__mock__";

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useParams: () => jest.fn(),
}));

it("renders Delete and Edit Buttons", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Details />
    </Provider>
  );
  expect(getByText("Delete")).toBeTruthy();
  expect(getByText("Edit")).toBeTruthy();
});
