import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <View style={styles.page}>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Profile
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
