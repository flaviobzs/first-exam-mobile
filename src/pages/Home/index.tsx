import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  HeaderContent,
  TextWelcome,
  TextExpense,
  Expense,
  ChoicePeriod,
  ContentPeriod,
  Period,
  ButtonsContent,
  Button,
  ContentList,
  ItemList,
  ItemDescription,
  ItemDate,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <TextWelcome>Bem vindo, Carlos</TextWelcome>
        <TextExpense>Você gastou hoje</TextExpense>
        <Expense>R$ 500</Expense>
        <ChoicePeriod>ESCOLHER PERÍODO:</ChoicePeriod>
        <ContentPeriod>
          <Period>Hoje</Period>
          <Period>Essa Semana</Period>
          <Period>Esse Mês</Period>
        </ContentPeriod>
      </HeaderContent>
      <ButtonsContent>
        <Button>
          <MaterialIcons name="flight" size={24} color="#ffffff" />
        </Button>
        <Button>
          <MaterialIcons name="home" size={24} color="#ffffff" />
        </Button>
        <Button>
          <MaterialIcons name="local-dining" size={24} color="#ffffff" />
        </Button>
        <Button>
          <MaterialIcons name="directions-car" size={24} color="#ffffff" />
        </Button>
        <Button>
          <MaterialIcons name="build" size={24} color="#ffffff" />
        </Button>
      </ButtonsContent>
      <ContentList>
        <ItemList>
          <ItemDescription>xxx</ItemDescription>
          <ItemDate>22/22/2222</ItemDate>
        </ItemList>
        <ItemList>
          <ItemDescription>xxx</ItemDescription>
          <ItemDate>22/22/2222</ItemDate>
        </ItemList>
      </ContentList>
    </Container>
  );
};

export default Home;
