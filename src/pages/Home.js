import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddCustomerForm from "../components/add/AddCustomerForm";
import { CustomerListTable } from "../components/Customer-list";
import { Card, Header, Wrapper } from "../components";
import logo from "../logo.svg";

import { getCustomers } from "../redux/actions/customerActions";

function Home() {
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  return (
    <>
      <Wrapper>
        <Header>
          <Header.Image src={logo} alt="customer" />
          <Header.Button>Add </Header.Button>
        </Header>
      </Wrapper>

      <Card>
        <AddCustomerForm />
      </Card>
      <Card>
        <CustomerListTable customer={customer} />
      </Card>
    </>
  );
}

export default Home;
