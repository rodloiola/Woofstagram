import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#009e91',
  },
});

const Heading = ({ text }) => (
  <Text style={styles.heading}>{text}</Text>
);

export default Heading;