import React from "react";
import { Container, Table } from "./styles/CustomerListTable";

export function CustomerListTable({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Table>
        <li className="table-header">
          <div className="col col-1"> Id</div>
          <div className="col col-2">Customer Name</div>
          <div className="col col-3">Birth Day</div>
          <div className="col col-4">Gender</div>
          <div className="col col-4">Value</div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label=" Id">
            1
          </div>
          <div className="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3" data-label="Bday">
            1991-02-21
          </div>
          <div className="col col-4" data-label="Gender">
            Male
          </div>
          <div className="col col-4" data-label="Value">
            122.99
          </div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label=" Id">
            2
          </div>
          <div className="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3" data-label="Bday">
            1991-02-21
          </div>
          <div className="col col-4" data-label="Gender">
            Male
          </div>
          <div className="col col-4" data-label="Value">
            122.99
          </div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label=" Id">
            3
          </div>
          <div className="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3" data-label="Bday">
            1991-02-21
          </div>
          <div className="col col-4" data-label="Gender">
            Male
          </div>
          <div className="col col-4" data-label="Value">
            122.99
          </div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label=" Id">
            4
          </div>
          <div className="col col-2" data-label="Customer Name">
            John Doe
          </div>
          <div className="col col-3" data-label="Bday">
            1991-02-21
          </div>
          <div className="col col-4" data-label="Gender">
            Male
          </div>
          <div className="col col-4" data-label="Value">
            122.99
          </div>
        </li>
      </Table>
    </Container>
  );
}

CustomerListTable.Table = function CustomerTable({ children, ...restProps }) {
  return <Table {...restProps}>{children}</Table>;
};
