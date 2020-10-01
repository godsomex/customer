import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Card } from "../components";
import { getCustomer } from "../redux/actions/customerActions";

function Details() {
  const { id } = useParams();
  const details = useSelector((state) => state.customer.customerDetails);
  const dispatch = useDispatch();

  const { name, birthday, gender, last_contact, value } = details || {};

  useEffect(() => {
    dispatch(getCustomer(id));
  }, []);

  return (
    <Card>
      <Card.Pane>
        <Card.Image src="/images/misc/home-bg.png" alt="Avarter" />
      </Card.Pane>
      <Card.Pane>
        <Card.Name>{name}</Card.Name>
        <Card.Gender>{gender}</Card.Gender>
        <Card.Bday>{birthday}</Card.Bday>
        <Card.Value>{value}</Card.Value>
        <Card.Value>{last_contact}</Card.Value>
      </Card.Pane>
    </Card>
  );
}

export default Details;
