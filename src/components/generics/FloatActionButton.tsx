import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface FloatActionButtonProps {
  icon: string;
  size?: number;
  iconColor?: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled: boolean;
}

const FloatActionButton: React.FC<FloatActionButtonProps> = ({
  icon,
  size,
  onPress,
  containerStyle,
  iconColor,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[
        !containerStyle
          ? {
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 70,
              position: "absolute",
              bottom: 10,
              right: 10,
              height: 70,
              backgroundColor: disabled ? "#e0e0e0" : "#fff", // Cor muda quando desabilitado
              borderRadius: 100,
            }
          : containerStyle,
        { opacity: disabled ? 0.5 : 1 }, // Reduz opacidade quando desabilitado
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Icon
        name={icon}
        size={size ? size : 30}
        color={disabled ? "#a1a1a1" : "#01a699"}
      />
    </TouchableOpacity>
  );
};

export default FloatActionButton;
