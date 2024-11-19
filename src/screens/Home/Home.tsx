import React, { useState } from "react";
import { Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import stylesHome from "./stylesHome";
import FloatActionButton from "../../components/generics/FloatActionButton";
import ActionButton from "../../components/generics/ActionButton";
import passwordService from "../../services/passwordService";

const Home = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    let pass = passwordService.generatePassword(
      length,
      includeNumbers,
      includeSpecialChars
    );
    setPassword(pass);
  };

  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.header}>Gerador de Senhas</Text>
      <Text></Text>
      <View style={stylesHome.passwordContainer}>
        <TextInput
          style={stylesHome.passwordInput}
          value={password}
          editable={false}
          placeholder="Sua senha aparecerá aqui"
        />
        <ActionButton
          title="Copiar"
          onPress={() => {}}
          containerStyle={stylesHome.copyButton}
          textStyle={{ color: "#fff" }}
        />
      </View>

      <View style={stylesHome.optionsContainer}>
        <Text style={stylesHome.optionLabel}>Comprimento: {length}</Text>

        <View style={stylesHome.switchContainer}>
          <Text style={stylesHome.optionLabel}>Incluir Números</Text>
          <Switch
            value={includeNumbers}
            onValueChange={(value) => setIncludeNumbers(value)}
          />
        </View>

        <View style={stylesHome.switchContainer}>
          <Text style={stylesHome.optionLabel}>
            Incluir Caracteres Especiais
          </Text>
          <Switch
            value={includeSpecialChars}
            onValueChange={(value) => setIncludeSpecialChars(value)}
          />
        </View>
      </View>

      <ActionButton
        title="Gerar Senha"
        onPress={generatePassword}
        containerStyle={stylesHome.generateButton}
        textStyle={{ color: "#fff" }}
      />

      <Text style={stylesHome.footerText}>
        Dica: Use senhas únicas para maior segurança!
      </Text>

      <FloatActionButton icon="add" onPress={() => {}} />
    </View>
  );
};

export default Home;
