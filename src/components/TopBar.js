import React from 'react';

import {Text, StyleSheet} from 'react-native';

const TopBar = () => {
  return <Text style={styles.title}>PhotoDog</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '400',
    backgroundColor: '#7e7e00',
    color: 'white',
    padding: 8,
    textAlign: 'center',
  },
});

export default TopBar;
