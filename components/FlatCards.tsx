import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View style={styles.section}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.itemText, styles.blue]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.itemText, styles.red]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.itemText, styles.green]}>
          <Text>Green</Text>
        </View>

        <View style={[styles.itemText, styles.red]}>
          <Text>Blue</Text>
        </View>
      </View>
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

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 18,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 5,
    color: '#ffffff',
  },
  red: {
    backgroundColor: 'red',
    margin: 5,
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
});
