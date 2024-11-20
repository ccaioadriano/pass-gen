import React, { useState } from "react";
import { Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import stylesHome from "./stylesHome";
import FloatActionButton from "../../components/generics/FloatActionButton";
import ActionButton from "../../components/generics/ActionButton";
import passwordService from "../../services/passwordService";
import PasswordLength from "../../components/generics/PasswordLength";
import { usePasswordContext } from "../../contexts/PasswordContext";

const Home = () => {
  const [password, setPassword] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const { length } = usePasswordContext();

  const generatePassword = () => {
    let pass = passwordService.generatePassword(
      length,
      includeNumbers,
      includeSpecialChars
    );
    setPassword(pass);
  };

  const handleClipBoard = () => {
    //salvar no clipboard
  };

  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.header}>Gerador de Senhas</Text>
      <View style={stylesHome.passwordContainer}>
        <TextInput
          style={stylesHome.passwordInput}
          value={password}
          editable={false}
          placeholder="Sua senha aparecerá aqui"
        />
        <ActionButton
          title="Copiar"
          onPress={handleClipBoard}
          containerStyle={stylesHome.copyButton}
          textStyle={{ color: "#fff" }}
        />
      </View>

      <View style={stylesHome.optionsContainer}>
        <View style={stylesHome.sliderContainer}>
          <PasswordLength />
        </View>

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
