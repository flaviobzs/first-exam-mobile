import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { itens } from "../../service/itens";
import ItemList from "../../components/ItemList";

import {
  Container,
  HeaderContent,
  TextWelcome,
  ContentExpense,
  TextExpense,
  Expense,
  ChoicePeriod,
  ContentPeriod,
  Period,
  ButtonsContent,
  Button,
  ContentList,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <TextWelcome>Bem vindo, Carlos</TextWelcome>
        <ContentExpense>
          <TextExpense>Você gastou hoje</TextExpense>
          <Expense>R$ 500</Expense>
        </ContentExpense>
        <ChoicePeriod>ESCOLHER PERÍODO:</ChoicePeriod>
        <ContentPeriod>
          <Period>Hoje</Period>
          <Period>Essa Semana</Period>
          <Period>Esse Mês</Period>
        </ContentPeriod>
      </HeaderContent>
      <ButtonsContent>
        <Button>
          <MaterialIcons
            name="flight"
            size={24}
            color="#ffffff"
            onPress={() => console.log("flight")}
          />
        </Button>
        <Button>
          <MaterialIcons
            name="home"
            size={24}
            color="#ffffff"
            onPress={() => console.log("home")}
          />
        </Button>
        <Button>
          <MaterialIcons
            name="local-dining"
            size={24}
            color="#ffffff"
            onPress={() => console.log("local-dining")}
          />
        </Button>
        <Button>
          <MaterialIcons
            name="directions-car"
            size={24}
            color="#ffffff"
            onPress={() => console.log("directions-car")}
          />
        </Button>
        <Button>
          <MaterialIcons
            name="build"
            size={24}
            color="#ffffff"
            onPress={() => console.log("build")}
          />
        </Button>
      </ButtonsContent>
      <ContentList
        data={itens}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ItemList description={item.description} date={item.date} />
        )}
      />
    </Container>
  );
};

export default Home;
