import React, { useState } from 'react';
import { View, Text, Button, Picker } from 'react-native';

const SockSelectionScreen = ({ navigation }) => {
  const [sockType, setSockType] = useState('');

  const handleNext = () => {
    navigation.navigate('ResultScreen', { sockType });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Select Your Sock Type:</Text>
      
      <Picker
        selectedValue={sockType}
        onValueChange={(itemValue) => setSockType(itemValue)}
        style={{ marginVertical: 20 }}
      >
        <Picker.Item label="Select sock..." value="" />
        <Picker.Item label="Nike Grip" value="nike_grip" />
        <Picker.Item label="Trusox Midweight" value="trusox_mid" />
        <Picker.Item label="Trusox Thin" value="trusox_thin" />
        <Picker.Item label="Adidas Alphaskin" value="alphaskin" />
        <Picker.Item label="Gain The Edge Grip" value="gain_the_edge" />
      </Picker>

      <Button title="Next" onPress={handleNext} disabled={!sockType} />
    </View>
  );
};

export default SockSelectionScreen;
