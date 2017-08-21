import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login/Login';
import MainScreen from './components/Main/MainScreen'

const App = () => {
  return (
    <Router>
       <Scene key="root">
        <Scene
          key="login"
          component={Login}
          title="Login"
          initial
        />

        <Scene
          key="main"
          component={MainScreen}
          title="Main"
          hideNavBar
        />

       </Scene>
    </Router>
  );
}

export default App;
