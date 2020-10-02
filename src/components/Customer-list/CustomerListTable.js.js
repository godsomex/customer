import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Table } from "./styles/CustomerListTable";

export function CustomerListTable({ children, ...restProps }) {
  const { customers } = restProps.customer;
  const history = useHistory();

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
            <li
              className="table-row"
              key={_id}
              onClick={() => history.push(`/details/${_id}`)}
            >
              <div className="col col-2" data-label="Customer Name">
                {`${name}`}
              </div>
              <div className="col col-3" data-label="Bday">
                {birthday && new Date(birthday).toLocaleDateString("en-US")}
              </div>
              <div className="col col-4" data-label="Gender">
                {gender}
              </div>
              <div className="col col-4" data-label="last contact">
                {last_contact &&
                  new Date(last_contact).toLocaleDateString("en-US")}
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
