import React from "react";

import XSvg from "../../assets/icons/x.svg";
import CircleSvg from "../../assets/icons/circle.svg";

import { Container, Image } from "./styles";

export const Card = ({ onClick, value }) => {
  return (
    <Container onClick={onClick}>
      {value === 1 && <Image src={XSvg} />}
      {value === 2 && <Image src={CircleSvg} />}
    </Container>
  );
};
