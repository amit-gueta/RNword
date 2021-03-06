import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import {Container, Content} from 'native-base';
import AppFooter from '../Main/AppFooter';

const SettingsScreen = () => {
  return (
    <Container>
      <Content>
          <Text style={styles.welcome}>
            Settings Screen Example
          </Text>
    </Content>
      <AppFooter/>
    </Container>
  );
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#34495e',
  },
});


export default SettingsScreen;
