import { Text } from "react-native";

const PasswordList = ({ route }: { route: any }) => {
  return (
    <>
      <Text>Ola Lista de senhas</Text>
      <Text>{route.params.password}</Text>
      <Text>{route.params.message}</Text>
    </>
  );
};

export default PasswordList;
