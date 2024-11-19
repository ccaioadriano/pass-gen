import { Slider, Text } from "@rneui/themed";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { usePasswordContext } from "../../contexts/PasswordContext";

const PasswordLength = () => {
  const { length, setLength } = usePasswordContext();
  return (
    <View>
      <Text>Comprimento: {length}</Text>
      <Slider
        value={length}
        onValueChange={setLength}
        maximumValue={24}
        minimumValue={1}
        step={1}
        allowTouchTrack
        trackStyle={{
          height: 6,
          borderRadius: 3,
          backgroundColor: "#d3d3d3", // Cor neutra para o trilho
        }}
        thumbStyle={{
          height: 24,
          width: 24,
          backgroundColor: "#2089dc", // Azul chamativo para o botão
          borderColor: "#fff", // Borda branca para destaque
          borderWidth: 2,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 3,
        }}
      />
    </View>
  );
};

export default PasswordLength;
