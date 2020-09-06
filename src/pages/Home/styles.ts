import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #f7ebe8;
  flex: 1;
  align-items: center;
`;

export const HeaderContent = styled.View`
  background-color: #e54b4b;
  width: 100%;
  align-items: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const TextWelcome = styled.Text`
  color: #ffffff;
`;

export const TextExpense = styled.Text`
  color: #ffffff;
`;

export const Expense = styled.Text`
  color: #ffffff;
`;

export const ChoicePeriod = styled.Text`
  color: #ffffff;
`;

export const ContentPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Period = styled.Text`
  color: #ffffff;
`;

export const ButtonsContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
`;

export const Button = styled.View`
  background-color: #444140;
  padding: 7px;
  border-radius: 3px;
`;

export const ContentList = styled.View`
  padding: 7px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ItemList = styled.View`
  background-color: #ffffff;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  padding: 15px;
  margin-top: 10px;
`;

export const ItemDescription = styled.Text`
  color: #444140;
`;

export const ItemDate = styled.Text`
  color: #444140;
`;
