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
      <View style={styles.mainContainer}>
      <View style={styles.navbar}>
      <Text style={[styles.navBarTitle,componentStyle.titleItalic]}>itunesBrowser</Text>
      <Text style={styles.navButton}>Search</Text>
      </View>
      <View  style={styles.content}>
        <Text>HEllow stuff HEllow stuffHEllow stuffHEllow stuffHEllow stuff
          HEllow stuffHEllow stuffHEllow stuff
          HEllow stuffHEllow stuffHEllow stuffHEllow stuff
          HEllow stuffHEllow stuffHEllow stuffHEllow stuff
          HEllow stuffHEllow stuffHEllow stuffHEllow stuff
          HEllow stuffHEllow stuffHEllow stuff
        </Text>
      </View>

      </View>
    );
  }
}




var componentStyle = StyleSheet.create({
  titleItalic: {
    fontStyle: 'italic'
  }

});

var styles=StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  content: {
    flex: 1,
    backgroundColor: '#CCC'

  },
  navbar: {
    backgroundColor:'#2A3744',
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'row',
    },
  navBarTitle: {
    color: '#FEFEFE',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  },
  navButton: {
    width: 50,
    color: '#FEFEFE',
    textAlign: 'center',
    flex: 0
  }
});

AppRegistry.registerComponent('itunesBrowser', () => itunesBrowser);
