/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  View,
  Component,
  Text,
  StyleSheet,
  StatusBarIOS
} from 'react-native';


StatusBarIOS.setStyle('light-content');
class itunesBrowser extends Component {
  render() {
    return (
      <View>
      <View style={styles.navbar}>
      <Text style={styles.navBarTitle}>itunesBrowser</Text>
      <Text style={styles.navButton}>Search</Text>
      </View>
      </View>
    );
  }
}

var styles=StyleSheet.create({
  navbar: {
    backgroundColor:'#2A3744',
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row'
  },
  navBarTitle: {
    color: '#FEFEFE',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  navButton: {
    width: 50,
    color: '#FEFEFE',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('itunesBrowser', () => itunesBrowser);
