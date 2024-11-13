import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>

      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardElevation]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevation]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevation]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevation]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevation]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevation]}>
          <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 10,
  },

  container: {
    padding: 5,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  cardElevation: {
    backgroundColor: '#BBB7B7FF',
    borderRadius: 5,
    elevation: 0,
  },
});
