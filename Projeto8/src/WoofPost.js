import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  woofPost: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
  },
  
  woofPostImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  
  woofPostContent: {
    flex: 2,
  },
  
  woofPostTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  
  woofPostDescription: {
    fontSize: 14,
    color: '#888',
  },
});

const WoofPost = ({ image, title, description }) => (
  <View style={styles.woofPost}>
    <Image source={{ uri: image }} style={styles.woofPostImage} />
    <View style={styles.woofPostContent}>
      <Text style={styles.woofPostTitle}>{title}</Text>
      <Text style={styles.woofPostDescription}>{description}</Text>
    </View>
  </View>
);

export default WoofPost;