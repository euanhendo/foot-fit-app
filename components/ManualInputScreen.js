import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ManualInputScreen = ({ navigation }) => {
  const [footLength, setFootLength] = useState('');
  const [footWidth, setFootWidth] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Foot Length (mm)</Text>
      <TextInput
        value={footLength}
        onChangeText={setFootLength}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Text style={{ fontSize: 18 }}>Foot Width (mm)</Text>
      <TextInput
        value={footWidth}
        onChangeText={setFootWidth}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button
        title="Next"
        onPress={() =>
          navigation.navigate('SockSelectionScreen', {
            footLength: parseFloat(footLength),
            footWidth: parseFloat(footWidth),
          })
        }
      />
    </View>
  );
};

export default ManualInputScreen;
