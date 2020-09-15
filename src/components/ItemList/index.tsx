import React from "react";

import { Container, ItemDescription, ItemDate } from "./styles";

interface PropsItem {
  description: string;
  date: string;
}

const ItemList: React.FC<PropsItem> = ({ description, date }) => {
  return (
    <Container>
      <ItemDescription>{description}</ItemDescription>
      <ItemDate>{date}</ItemDate>
    </Container>
  );
};

export default ItemList;
