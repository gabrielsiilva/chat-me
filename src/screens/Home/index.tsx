import React from 'react';
import { TextInput, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { MessageCard } from '../components/MessageCard';
import { Stories } from '../components/Stories';
import { Container, Title } from './styles';

export const Home = () => {

  return (
    <Container>
      <View>
        <Title>
          Messages
        </Title>

        <Avatar />
      </View>

      <View>
        <TextInput />
      </View>

      <View>
        <Stories />
      </View>

      <View>
        <MessageCard />
      </View>

    </Container>
  );

};