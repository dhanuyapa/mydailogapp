import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Slider from '../components/slider'; // Import the Slider component
import d1 from '../assets/images/d1.jpg'; 
import d2 from '../assets/images/d2.jpg'; 
import d3 from '../assets/images/d3.jpg'; // Import the local image
import RoundedBox from '../components/RoundedBox'; 
import ThreePartBox from '../components/ThreePartBox'; 
import BottomBox from '../components/Bottombox'; 
import BottomBox2 from '../components/Bottombox2'; 
import 'react-native-gesture-handler';


const Index = () => {
  // Sample image links for the Slider component
  const images = [d1, d2, d3];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View>
        {/* Include the Slider component */}
        <Slider images={images} />
        <RoundedBox />
        <ThreePartBox />
        <BottomBox />
        <BottomBox2 />
        <BottomBox />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default Index;
