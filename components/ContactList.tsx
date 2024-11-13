import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contact = [
    {
      id: 1,
      username: 'jdoe',
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      username: 'asmith',
      name: 'Alice Smith',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      username: 'bjones',
      name: 'Bob Jones',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      username: 'cwilson',
      name: 'Catherine Wilson',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 5,
      username: 'dmurphy',
      name: 'Daniel Murphy',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: 6,
      username: 'eroberts',
      name: 'Emily Roberts',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      id: 7,
      username: 'fwhite',
      name: 'Frank White',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      id: 8,
      username: 'gmartinez',
      name: 'Grace Martinez',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
      id: 9,
      username: 'hhall',
      name: 'Henry Hall',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
      id: 10,
      username: 'ijackson',
      name: 'Isabella Jackson',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
  ];
  return (
    <View style={styles.section}>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contact.map(item => (
          <View key={item.id} style={styles.userCard}>
            <Image source={{uri: item.image}} style={styles.cartImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 8,
  },
  container: {},
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: 3,
    marginTop: 3,
    marginHorizontal: 2,
    borderRadius: 5,
  },
  cartImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    overflow: 'hidden',
    elevation: 0,
    marginTop: 10,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'semibold',
  },
});
