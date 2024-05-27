import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link, Slot } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/header';

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Slot />
      </View>
      <View style={styles.navbar}>
        <Link href="/">
          <View style={styles.navItem}>
            <Feather name="home" size={24} color="black" />
            <Text style={styles.navText}>Home</Text>
          </View>
        </Link>

        <Link href="/category">
          <View style={styles.navItem}>
            <MaterialIcons name="support-agent" size={24} color="black" />
            <Text style={styles.navText}>Support</Text>
          </View>
        </Link>

        <Link href="/product">
          <View style={styles.navItem}>
            <Ionicons name="rocket-outline" size={24} color="black" />
            <Text style={styles.navText}>My offers</Text>
          </View>
        </Link>

        <Link href="/notification">
          <View style={styles.navItem}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={styles.navText}>Notifications</Text>
          </View>
        </Link>

        <Link href="/profile">
          <View style={styles.navItem}>
            <SimpleLineIcons name="menu" size={24} color="black" />
            <Text style={styles.navText}>Menu</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 20, // Adjust the paddingBottom as needed
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#faf7fa', // Specify background color here
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: 'black',
    marginTop: 2,
  },
});

export default RootLayout;
