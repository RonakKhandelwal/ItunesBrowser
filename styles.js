'use strict';
import React, {
  StyleSheet,
} from 'react-native';



export default StyleSheet.create({
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
