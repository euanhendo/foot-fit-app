import React from 'react';
import { View, Text, FlatList } from 'react-native';
import bootDatabase from '../bootDatabase.json';
import sockDatabase from '../sockDatabase.json';

const ResultScreen = ({ route }) => {
  const { footLength, footWidth, sockType } = route.params;

  const sockAdjustment = sockDatabase[sockType]?.thickness || 0;
  const adjustedLength = parseFloat(footLength) + sockAdjustment;
  const adjustedWidth = parseFloat(footWidth) + sockAdjustment;

  const recommendedBoots = bootDatabase.filter(boot => {
    return (
      adjustedLength >= boot.minLength &&
      adjustedLength <= boot.maxLength &&
      adjustedWidth >= boot.minWidth &&
      adjustedWidth <= boot.maxWidth
    );
  });

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Boot Recommendations:
      </Text>
      <FlatList
        data={recommendedBoots}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.notes}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text>No suitable boots found for the given measurements.</Tex
