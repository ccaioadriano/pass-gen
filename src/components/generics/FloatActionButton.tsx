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
}

const FloatActionButton: React.FC<FloatActionButtonProps> = ({
  icon,
  size,
  onPress,
  containerStyle,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      style={
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
              backgroundColor: "#fff",
              borderRadius: 100,
            }
          : containerStyle
      }
      onPress={onPress}
    >
      <Icon name={icon} size={size ? size : 30} color="#01a699" />
    </TouchableOpacity>
  );
};

export default FloatActionButton;
