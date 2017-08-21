import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import CardList from './Tabs/CardList';
import Match from './Tabs/Match';

import {Container, Header, Title, Button, Icon, Tabs, Tab, Right, Left, Body} from 'native-base';

const CardScreen = () => {
  return (
    <Container>
      <Header hasTabs>
        <Left>
          <Button transparent onPress={() => Actions.unit()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title> Unit 1 words</Title>
        </Body>
        <Right />
      </Header>

        <Tabs>
          <Tab heading="Cards">
            <CardList />
          </Tab>
          <Tab heading="Match">
            <Match />
          </Tab>
        </Tabs>
      </Container>
  );
}

export default CardScreen;
