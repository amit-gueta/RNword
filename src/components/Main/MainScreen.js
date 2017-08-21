import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Container} from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

import UnitsScrend from '../Units/UnitScreen';
import MatchScreen from '../Match/MatchScreen';
import SettingsScreen from '../Settings/SettingsScreen';
import CardScreen from '../Card/CardScreen';

const MainScreen = () => {
  return (
    <Container>
      <AppHeader/>
      <Router>
          <Scene
            key="unit"
            component={UnitsScrend}
            title="UnitScreen"
            hideNavBar
          />

          <Scene
            key="match"
            component={MatchScreen}
            title="MatchScreen"
            hideNavBar
          />

          <Scene
            key="settings"
            component={SettingsScreen}
            title="SettingsScreen"
            hideNavBar
          />
          <Scene
            key="card"
            component={CardScreen}
            title="cardScreen"
          />

      </Router>
     </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
});

export default MainScreen;
