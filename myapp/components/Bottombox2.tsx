import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BottomBox2: React.FC = () => {
  return (
    <View style={styles.box}>  
      <Text style={styles.text}>Recommended Data Packages                        <AntDesign name="down" size={24} color="black" />  </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f0f0f0', // Green background color
    padding: 20,
    borderRadius: 15, // Rounded corners
    margin: 10,
    alignItems: 'right',
    justifyContent: 'center',
  },
  text: {
    color: '#000000', // White text color
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default BottomBox2;
