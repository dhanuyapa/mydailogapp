import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ThreePartBox = () => {
  return (
    <View style={styles.container}>
      {/* First Part: Text */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>MONEY</Text>
        <Text style={styles.text}>DATA</Text>
        <Text style={styles.text}>VOICE</Text>
        <Text style={styles.text}>SMS</Text>
      </View>

      {/* Second Part: Middle Box with Pink Color and Rounded Shape */}
      <View style={styles.middleBox}>
        <Text style={styles.text2}>Prepaid Balance</Text>
        <Text style={styles.text2}>RS. 100.00</Text>
        <Text style={styles.text2}>Valid till 27 May 2025</Text>
      </View>

      {/* Third Part: Two Buttons Horizontally */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonContainer1} onPress={() => {}}>
          <Text style={styles.buttonText1}>TRANSACTIONS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer2} onPress={() => {}}>
          <Text style={styles.buttonText2}>RELOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  middleBox: {
    width: 350,
    height: 115,
    backgroundColor: '#75075d',
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  buttonContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    marginBottom: 10,
    width: '40%',
    marginHorizontal: 40,
  },
  buttonText1: {
    color: 'red',
    fontWeight: 'bold',
  },
  buttonContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: 'red',
    marginBottom: 10,
    width: '40%',
    marginHorizontal: 40,
  },
  buttonText2: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ThreePartBox;
