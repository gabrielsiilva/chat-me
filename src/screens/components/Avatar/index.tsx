import React from "react";
import { Container } from "./styles";

type IAvatar = {
  size: "small" | "large"
}

export const Avatar = ({ size }: IAvatar) => {
  return (
    <Container size={size}>

    </Container>
  );
}