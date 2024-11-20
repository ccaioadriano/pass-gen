import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { usePasswordContext } from "../../contexts/PasswordContext";
import Slider from "@react-native-community/slider";

const PasswordLength = () => {
  const { length, setLength } = usePasswordContext();
  return (
    <View>
      <Text style={styles.label}>Tamanho da senha: {length}</Text>

      <Slider
        style={styles.slider}
        minimumValue={0} // Valor mínimo
        maximumValue={24} // Valor máximo
        step={1} // Incremento
        value={length}
        onValueChange={(val) => setLength(val)} // Atualiza o estado
        minimumTrackTintColor="#1E90FF" // Cor da trilha mínima
        maximumTrackTintColor="#D3D3D3" // Cor da trilha máxima
        thumbTintColor="#1E90FF" // Cor do botão
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 5,
    marginLeft:6
  },
  slider: {
    height: 40,
  },
});

export default PasswordLength;
