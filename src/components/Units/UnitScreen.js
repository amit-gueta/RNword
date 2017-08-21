import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import AppFooter from '../Main/AppFooter';

const UnitsScreen = () => {
  let items = ['Unit 1','Unit 2','Unit 3','Unit 4','Unit 5'];
  return (
        <Container>
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('../../images/2.png')} />
                    <Body>
                      <Text>Unit 1</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Button block info style={styles.infoButton} onPress={ () => Actions.card()} >
                              <Text>Info</Text>
                    </Button>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>4 Comments</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
          </Card>
      </Content>
      <AppFooter/>
    </Container>
  );
}

const styles = StyleSheet.create({
  infoButton: {
    flex: 1,
    alignItems: 'center'
  }
});

export default UnitsScreen;
