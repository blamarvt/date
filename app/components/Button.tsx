import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

type ButtonProps = {
  title: string;
  disabled?: boolean;
  onPress: () => void;
  icon?: IconDefinition;
};

const Button = ({ onPress, icon, title }: ButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {icon && (
      <FontAwesomeIcon
        style={styles.icon}
        icon={icon}
        size={20}
        color="black"
      />
    )}
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 300,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
