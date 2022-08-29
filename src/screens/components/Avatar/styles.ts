import styled from 'styled-components/native';

export const Container = styled.View<{ size: "small" | "large" }>`
  width: ${(props) => props.size == "small" ? '40px' : '60px'};
  height: ${(props) => props.size == "small" ? '40px' : '60px'};
  border-radius: 50;
  background-color: #8a2be2;
`;
