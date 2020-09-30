import React from "react";
import { Card } from "../components";

function Details() {
  return (
    <Card>
      <Card.Pane>
        <Card.Image src="/images/misc/home-bg.png" alt="Avarter" />
      </Card.Pane>
      <Card.Pane>
        <Card.Name>Godspower Omenihu</Card.Name>
        <Card.Gender>Male</Card.Gender>
        <Card.Bday>1991-02-21</Card.Bday>
        <Card.Value>122.99</Card.Value>
      </Card.Pane>
    </Card>
  );
}

export default Details;
