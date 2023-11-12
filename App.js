import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Dashboard from './layout/dashboard';

export default function App() {
  return (
    // <ScrollView>
    <Dashboard>


      <View style={styles.container}>

        {Array.from(Array(10).keys()).map((item, index) => {

          const imageId = index + 1; // Start with 1 to 10 for different images
          const imageUrl = `https://picsum.photos/200/200?image=${imageId}`;
          return (
            <><Image
              source={{ uri: imageUrl }}
              style={{ width: 300, height: 300, marginTop: 50 }} /><Text style={{ color: 'black', padding: 20 }}>Lorem ipsum, or lipsum as it
              </Text></>)
        })}

        <StatusBar style="auto" />
      </View>
      <View style={styles.container2}>
        <Text style={{ color: 'white', padding: 20 }}>

          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”

        </Text>
        <StatusBar style="auto" />
      </View>

    </Dashboard>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container2: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
