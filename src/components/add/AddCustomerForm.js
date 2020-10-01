import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled/macro";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { addCustomer } from "../../redux/actions/customerActions";
function AddCustomerForm() {
  const dispatch = useDispatch();
  const [customerDetails, setCustomerDetails] = useState({
    CustomerName: "",
    birthday: "",
    gender: "",
    lastContact: "",
    customerLifetimeValue: "",
  });

  const {
    CustomerName,
    birthday,
    gender,
    lastContact,
    customerLifetimeValue,
  } = customerDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(
      addCustomer({
        name: CustomerName,
        birthday,
        gender,
        value: customerLifetimeValue,
        last_contact: lastContact,
      })
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  return (
    <Container>
      <Title>Add New Customer</Title>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="CustomerName"
          value={CustomerName}
          onChange={handleChange}
          label="first Name"
          required
        />
        <FormInput
          type="text"
          name="birthday"
          value={birthday}
          onChange={handleChange}
          label="Birth Day"
          required
        />
        <FormInput
          type="text"
          name="gender"
          value={gender}
          onChange={handleChange}
          label="Gender"
          required
        />
        <FormInput
          type="text"
          name="lastContact"
          value={lastContact}
          onChange={handleChange}
          label="Last Contact"
          required
        />
        <FormInput
          type="number"
          name="customerLifetimeValue"
          value={customerLifetimeValue}
          onChange={handleChange}
          label="customer Lifetime Value"
          required
        />
        <CustomButton type="submit">ADD</CustomButton>
      </form>
    </Container>
  );
}

export default AddCustomerForm;

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Title = styled.h2`
  margin: 10px 0;
`;
