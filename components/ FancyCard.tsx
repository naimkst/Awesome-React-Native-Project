import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.section}>
      <Text style={styles.headingText}>Tranding Places</Text>

      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={styles.cartImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  card: {},
  cardElevated: {},
  cartImage: {
    height: 200,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 0,
    marginTop: 10,
  },
});
