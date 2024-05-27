import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RoundedBox: React.FC = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Here's INFO AS AT 6:28 PM,Today.Pull to refresh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f0f0f0', // Green background color
    padding: 20,
    borderRadius: 15, // Rounded corners
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#635f63', // White text color
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default RoundedBox;
