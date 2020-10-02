import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { Card } from "../components";
import CustomButton from "../components/custom-button/custom-button.component";
import UpdateCustomerForm from "../components/update/UpdateCustomerForm";
import { getCustomer } from "../redux/actions/customerActions";
import { deleteCustomer } from "../redux/actions/customerActions";

function Details() {
  const { id } = useParams();
  const history = useHistory();
  const details = useSelector((state) => state.customer.customerDetails);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const { name, birthday, gender, last_contact, value } = details || {};

  useEffect(() => {
    dispatch(getCustomer(id));
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deleteCustomer(id));
    history.push("/");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      {isEditing ? (
        <UpdateCustomerForm details={details} />
      ) : (
        <Card>
          <Card.Pane>
            <Card.Image src="/images/misc/home-bg.png" alt="Avarter" />
          </Card.Pane>
          <Card.Pane>
            <Card.Name>{name}</Card.Name>
            <Card.Gender>{gender}</Card.Gender>
            <Card.Bday>
              {birthday && new Date(birthday).toLocaleDateString("en-US")}
            </Card.Bday>
            <Card.Value>{value}</Card.Value>
            <Card.Value>
              {last_contact &&
                new Date(last_contact).toLocaleDateString("en-US")}
            </Card.Value>
          </Card.Pane>
        </Card>
      )}
      <Card>
        <CustomButton type="submit" onClick={handleDelete}>
          Delete
        </CustomButton>
        {!isEditing ? (
          <CustomButton type="submit" onClick={handleEdit}>
            Edit
          </CustomButton>
        ) : null}
      </Card>
    </>
  );
}

export default Details;
