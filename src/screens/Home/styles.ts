import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 25px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: 500;
`;

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #f6f6f6;
  border-radius: 15px;
  padding: 15px;
  margin: 25px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  width: 100%;
  color: #000;
  margin-left: 10px;
`;

export const StoriesList = styled.FlatList`
  padding: 0 25px;
  margin: 10px 0;
`;

export const MessagesContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`;
