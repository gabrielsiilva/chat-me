import styled from 'styled-components/native';

export const Container = styled.View<{ size: "small" | "large" }>`
  width: ${(props) => props.size == "small" ? '40' : '60'};
  height: ${(props) => props.size == "small" ? '40' : '60'};
  border-radius: 50%;
  background-color: #8a2be2;
`;
