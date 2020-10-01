import React from "react";

import { Container, Table } from "./styles/CustomerListTable";

export function CustomerListTable({ children, ...restProps }) {
  const { list: customers } = restProps.customer;

  return (
    <Container {...restProps}>
      <Table>
        <li className="table-header">
          <div className="col col-2">Customer Name</div>
          <div className="col col-3">Birth Day</div>
          <div className="col col-4">Gender</div>
          <div className="col col-4">Last Contact</div>
          <div className="col col-4">Value</div>
        </li>

        {customers?.map(
          ({ _id, value, name, birthday, gender, last_contact }) => (
            <li className="table-row" key={_id}>
              <div className="col col-2" data-label="Customer Name">
                {`${name}`}
              </div>
              <div className="col col-3" data-label="Bday">
                {birthday}
              </div>
              <div className="col col-4" data-label="Gender">
                {gender}
              </div>
              <div className="col col-4" data-label="last contact">
                {last_contact}
              </div>
              <div className="col col-4" data-label="Value">
                {value}
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
