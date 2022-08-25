import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Home />
    </Container>
  );
}

export const Container = styled.View`
  flex: 1;
  background: 'ffffff';
`;
