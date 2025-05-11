import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Button from "../../components/Button";
import ImageLoad from "../../components/Image";

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Explore
      </Text>
      <ImageLoad
        style={{ width: "100%", height: 350 }}
        loadingStyle={{ size: "large", color: "blue" }}
        source={{ uri: "https://placehold.co/600x400/png" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
