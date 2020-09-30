import React from "react";
import AddCustomerForm from "../components/add/AddCustomerForm";
import { CustomerListTable } from "../components/Customer-list";
import { Card, Header, Wrapper } from "../components";
import logo from "../logo.svg";

function Home() {
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
        <CustomerListTable />
      </Card>
    </>
  );
}

export default Home;
