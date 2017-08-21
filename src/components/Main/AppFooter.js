import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabName: 'unit'
    };
}

  tabAction(tabName) {
    this.setState({activeTabName: tabName});
    if (tabName === 'unit') {
      Actions.unit();
    }
    else if (tabName === 'match') {
      Actions.match();
    }
    else {
      Actions.settings();
    }
  }

  render() {
    return (
      <Footer>
      <FooterTab>
        <Button
          active={(this.state.activeTabName === 'unit')? true: false}
           onPress={ () => {this.tabAction('unit')}}>
          <Icon name="apps" />
          <Text>Units</Text>
        </Button>
        <Button
            active={(this.state.activeTabName === 'match')? true: false}
           onPress={ () => {this.tabAction('match')}}>
          <Icon name="camera" />
          <Text>Match</Text>
        </Button>
        <Button
          active={(this.state.activeTabName === 'settings')? true: false}
          onPress={ () => {this.tabAction('settings')}}>
          <Icon name="egg" />
          <Text>Setting</Text>
        </Button>
      </FooterTab>
    </Footer>
     );
  }
}
module.export = AppFooter;
