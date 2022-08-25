import React from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { Avatar } from '../components/Avatar';
import { MessageCard } from '../components/MessageCard';
import { Stories } from '../components/Stories';
import { Container, Header, MessagesContainer, SearchInput, SearchInputContainer, StoriesList, Title } from './styles';
import Icons from '@expo/vector-icons/FontAwesome'

export const Home = () => (
  <Container>
    <Header>
      <Title>
        Messages
      </Title>

      <Avatar size="small" />
    </Header>

    <SearchInputContainer>
      <Icons
        size={20}
        name="search"
        color={'#717173'} />
      <SearchInput
        placeholder='Search'
        placeholderTextColor="#717173" />
    </SearchInputContainer>

    <View>
      <StoriesList
        data={['a', 'b', 'c', 'd', 'e', 'f', 'g']}
        renderItem={() => (
          <Stories />
        )}
        keyExtractor={(item: string) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 35}}
      />
    </View>

    <MessagesContainer>
      <FlatList
        data={['a', 'b', 'c', 'd', 'e', 'f', 'g']}
        renderItem={() => (
          <MessageCard />
        )}
        keyExtractor={(item: string) => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 55}}
      />
    </MessagesContainer>

  </Container>
);