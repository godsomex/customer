import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddCustomerForm from "../components/add/AddCustomerForm";
import { CustomerListTable } from "../components/Customer-list";
import { Card, Header, Wrapper } from "../components";
import logo from "../logo.svg";

import { getCustomers } from "../redux/actions/customerActions";

function Home() {
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch, isAdd]);

  return (
    <>
      <Wrapper>
        <Header>
          <Header.Image src={logo} alt="customer" />
          <Header.Button onClick={() => setIsAdd(true)}>Add </Header.Button>
        </Header>
      </Wrapper>
      {isAdd ? (
        <Card>
          <AddCustomerForm setIsAdd={setIsAdd} />
        </Card>
      ) : null}
      <Card>
        <CustomerListTable customer={customer} />
      </Card>
    </>
  );
}

export default Home;
