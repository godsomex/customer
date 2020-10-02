import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styled from "@emotion/styled/macro";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { updateCustomer } from "../../redux/actions/customerActions";

function UpdateCustomerForm({ details }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [customerDetails, setCustomerDetails] = useState({
    CustomerName: details.name,
    birthday: details.birthday,
    gender: details.gender,
    lastContact: details.last_contact,
    customerLifetimeValue: details.value,
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
      updateCustomer(details._id, {
        name: CustomerName,
        birthday,
        gender,
        value: customerLifetimeValue,
        last_contact: lastContact,
      })
    );

    history.push("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  return (
    <Container>
      <Title>Edit Customer</Title>
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
          value={new Date(birthday).toLocaleDateString("en-US")}
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
          value={new Date(lastContact).toLocaleDateString("en-US")}
          onChange={handleChange}
          label="Last Contact"
          required
        />
        <FormInput
          type="number"
          name="customerLifetimeValue"
          value={customerLifetimeValue}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">Edit</CustomButton>
      </form>
    </Container>
  );
}

export default UpdateCustomerForm;

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Title = styled.h2`
  margin: 10px 0;
`;
