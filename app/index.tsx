import { useEffect, useState } from "react";
import { Image } from "expo-image";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Image as RNImage,
  ActivityIndicator,
  ScrollView,
  Platform,
  useColorScheme,
} from "react-native";

export default function Index() {
  const [refreshing, setRefreshing] = useState(true);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    fetch("https://randomuser.me/api/?results=8")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("started");
        setRefreshing(true);
        setTimeout(() => {
          var newdata = userData.concat(responseJson.results);
          setUserData(newdata);
          setRefreshing(false);
          console.log("finished");
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logo = require("./assets/logo_heart.png");
  const logoRatio = 100 / RNImage.resolveAssetSource(logo).height;
  const logoWidth = RNImage.resolveAssetSource(logo).width * logoRatio;

  const colorScheme = useColorScheme();

  console.log("Color Scheme: ", colorScheme);

  let googleLogo;
  let appleLogo;

  if (colorScheme === "dark") {
    googleLogo = Platform.select({
      ios: require("./assets/google/ios/dark/ios_dark_rd_ctn.png"),
      android: require("./assets/google/android/dark/android_dark_rd_ctn.png"),
    } as any);
    appleLogo = require("./assets/apple/apple_dark_ctn_rd.png");
  } else {
    googleLogo = Platform.select({
      ios: require("./assets/google/ios/light/ios_light_rd_ctn.png"),
      android: require("./assets/google/android/light/android_light_rd_ctn.png"),
    } as any);
    appleLogo = require("./assets/apple/apple_light_ctn_rd.png");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={logo}
          style={{
            height: 100,
            width: logoWidth,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            marginTop: 5,
            marginBottom: 10,
          }}
        >
          Human Finder
        </Text>
      </View>
      <View style={styles.body}>
        {/* Login with Google button */}
        <Image
          source={googleLogo}
          style={{
            width: 250,
            height: 75,
            resizeMode: "contain",
          }}
        />
        <Text style={styles.text}>Or</Text>
        <Image
          source={appleLogo}
          style={{
            width: 300,
            height: 75,
            resizeMode: "contain",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  activity: {
    padding: 20,
    backgroundColor: "#000",
  },
  header: {
    display: "flex",
    width: "100%",
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  body: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
