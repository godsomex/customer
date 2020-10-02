import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Home from "./home";
import { initialState } from "../__mock__";

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

it("renders table header", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(getByText("Customer Name")).toBeTruthy();
  expect(getByText("Birth Day")).toBeTruthy();
  expect(getByText("Gender")).toBeTruthy();
  expect(getByText("Last Contact")).toBeTruthy();
  expect(getByText("Value")).toBeTruthy();
});

it("renders table body correctly", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(getByText("Godspower Omenihu")).toBeTruthy();
  expect(getByText("5/10/2020")).toBeTruthy();
  expect(getByText("f")).toBeTruthy();
  expect(getByText("10/10/2020")).toBeTruthy();
  expect(getByText("4.34")).toBeTruthy();
});
