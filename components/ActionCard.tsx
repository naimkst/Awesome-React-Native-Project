import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.section}>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={styles.cardBox}>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={styles.cartImage}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginTop: 10,
            marginBottom: 10,
          }}
          onPress={() => openWebsite('https://www.google.com')}>
          Google
        </Text>
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
    marginBottom: 10,
  },
  cardBox: {
    backgroundColor: '#0D0D0DFF',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cartImage: {
    height: 200,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    elevation: 0,
    marginTop: 10,
  },
});
