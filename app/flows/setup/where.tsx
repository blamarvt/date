import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { useRouter } from "expo-router";

export default function WhereSetupScreen() {
  const router = useRouter();
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
        Where are you looking?
      </Text>
      <Button title="My Current Location" onPress={() => {}} />
      <Button
        title="Somewhere Else"
        onPress={() => {
          router.push("/flows/setup/where_other");
        }}
      />
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
