import React, {Component} from 'react';
import {Text} from 'react-native';
import {Header, Title, Body} from 'native-base';

export default class AppHeader extends Component {
render() {
  return (
           <Header>
               <Body>
                <Text>
                    Word App
                </Text>
               </Body>
           </Header>
       );
 }
}

module.export = AppHeader;
