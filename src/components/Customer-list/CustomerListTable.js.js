import React from "react";
import { Container, Table } from "./styles/CustomerListTable";

export function CustomerListTable({ children, ...restProps }) {
  const { list: customers } = restProps.customer;

  return (
    <Container {...restProps}>
      <Table>
        <li className="table-header">
          <div className="col col-1"> Id</div>
          <div className="col col-2">Customer Name</div>
          <div className="col col-3">Birth Day</div>
          <div className="col col-4">Gender</div>
          <div className="col col-4">Value</div>
          <div className="col col-4">Last Contact</div>
        </li>

        {customers?.map(
          ({
            customerID,
            name,
            birthday,
            gender,
            lastContact,
            customerLifetimeValue,
          }) => (
            <li className="table-row">
              <div className="col col-1" data-label=" Id">
                {customerID}
              </div>
              <div className="col col-2" data-label="Customer Name">
                {`${name.first} ${name.last}`}
              </div>
              <div className="col col-3" data-label="Bday">
                {birthday}
              </div>
              <div className="col col-4" data-label="Gender">
                {gender}
              </div>
              <div className="col col-4" data-label="last contact">
                {lastContact}
              </div>
              <div className="col col-4" data-label="Value">
                {customerLifetimeValue}
              </div>
            </li>
          )
        )}
      </Table>
    </Container>
  );
}

CustomerListTable.Table = function CustomerTable({ children, ...restProps }) {
  return <Table {...restProps}>{children}</Table>;
};
