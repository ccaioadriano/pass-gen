import * as Clipboard from "expo-clipboard";
import React, { useState } from "react";
import { Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import ActionButton from "../../components/generics/ActionButton";
import FloatActionButton from "../../components/generics/FloatActionButton";
import PasswordLength from "../../components/generics/PasswordLength";
import { usePasswordContext } from "../../contexts/PasswordContext";
import passwordService from "../../services/passwordService";
import stylesHome from "./stylesHome"; // Certifique-se de ter o arquivo stylesHome.ts ou defina aqui

const Home = ({ navigation }: { navigation: any }) => {
  const [password, setPassword] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const { length } = usePasswordContext();

  const handleGeneratePassword = () => {
    let pass = passwordService.generatePassword(
      length,
      includeNumbers,
      includeSpecialChars
    );
    setPassword(pass);
  };

  const handleClipBoard = async () => {
    if (password.length > 0) {
      await Clipboard.setStringAsync(password);
    }
  };

  const handleSavePassword = async () => {
    try {
      let message = await passwordService.savePassword(password);
      navigation.navigate("PasswordList", {
        password: password || "123",
        message: message,
      });
    } catch (error) {
      console.error(error);
    }
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
        <PasswordLength />

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

      <View style={stylesHome.footerButtonsContainer}>
        <ActionButton
          title="Gerar Senha"
          onPress={handleGeneratePassword}
          containerStyle={stylesHome.generateButton}
          textStyle={{ color: "#fff", textAlign: "center" }}
        />

        <TouchableOpacity
          style={stylesHome.linkContainer}
          onPress={() => {
            navigation.navigate("PasswordList");
          }}
        >
          <Text style={stylesHome.linkText}>Ver lista de senhas</Text>
        </TouchableOpacity>
      </View>

      <FloatActionButton icon="add" disabled={password.trim().length === 0} onPress={handleSavePassword} />
    </View>
  );
};

export default Home;
