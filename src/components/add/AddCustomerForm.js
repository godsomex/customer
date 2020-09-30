import React, { useState } from "react";
import styled from "@emotion/styled/macro";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

function AddCustomerForm() {
  const [customerDetails, setCustomerDetails] = useState({
    CustomerName: "",
    bday: "",
    gender: "",
    customerLifetimeValue: "",
  });

  const { CustomerName, bday, gender, customerLifetimeValue } = customerDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log({ CustomerName, bday, gender, customerLifetimeValue });
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
          name="bday"
          value={bday}
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
          name="customerLifetimeValue"
          value={customerLifetimeValue}
          onChange={handleChange}
          label="Life Time Value"
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
