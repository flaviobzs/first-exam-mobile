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
  font-size: 32px;
  margin-top: 20px;
`;

export const ContentExpense = styled.View`
  align-items: center;
  margin: 40px auto;
`;

export const TextExpense = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const Expense = styled.Text`
  color: #ffffff;
  font-size: 24px;
  margin-top: 3px;
`;

export const ChoicePeriod = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;

export const ContentPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 15px auto;
`;

export const Period = styled.Text`
  color: #ffffff;
  font-size: 12px;
`;

export const ButtonsContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 5px;
  margin-top: 20px;
`;

export const Button = styled.TouchableHighlight`
  background-color: #444140;
  padding: 7px;
  border-radius: 3px;
`;

export const ContentList = styled.FlatList`
  padding: 0px 7px;
  width: 100%;
`;
