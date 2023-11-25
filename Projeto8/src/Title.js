import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Title = ({ text }) => (
  <Text style={styles.title}>{text}</Text>
);

export default Title;