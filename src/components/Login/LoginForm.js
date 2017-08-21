import React, { Component } from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'

import {Actions} from 'react-native-router-flux';

export default class LoginForm extends Component {
    render () {
      return (
        <View style={styles.container}>
         <TextInput
           placeholder="Username or Email"
           placeholderTextColor="rgba(255,255,255,0.7)"
           returnKeyType="next"
           style={styles.input}
          />
         <TextInput
           placeholder="Password"
           placeholderTextColor="rgba(255,255,255,0.7)"
           secureTextEntry
           returnKeyType="go"
           style={styles.input}
         />

       <TouchableOpacity style={styles.btnContainer}>
          <Text
            style={styles.btnText}
            onPress={ () => Actions.main()}
            >
              LOGIN
          </Text>
         </TouchableOpacity>
       </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  btnContainer: {
    paddingVertical: 15,
    backgroundColor: '#2980b9'
  },
  btnText : {
    textAlign: 'center',
    color: "#FFF"
  }
});
