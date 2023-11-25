import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const styles = StyleSheet.create({
  woofCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#009e91',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
  },
});

const WoofCard = ({ name, avatarUrl }) => (
  <View style={styles.woofCard}>
    <Image source={{ uri: avatarUrl }} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default WoofCard;
