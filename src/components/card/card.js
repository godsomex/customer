import React from "react";
import {
  Container,
  Image,
  Inner,
  Pane,
  Name,
  Bday,
  Gender,
  Value,
} from "./styles/Card";

export function Card({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Card.Pane = function CardPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Card.Name = function CardName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Card.Bday = function CardBday({ children, ...restProps }) {
  return <Bday {...restProps}>{children}</Bday>;
};

Card.Gender = function CardGender({ children, ...restProps }) {
  return <Gender {...restProps}>{children}</Gender>;
};
Card.Value = function CardValue({ children, ...restProps }) {
  return <Value {...restProps}>{children}</Value>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
