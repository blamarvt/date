import React from "react";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image as RNImage,
} from "react-native";

import Button from "./components/Button";
import { loginWithApple, loginWithGoogle } from "../lib/auth";

import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";

import i18n from "../lib/words";

export default class LoginScreen extends React.Component {
  render() {
    const router = useRouter();
    const logo = require("../assets/logo_heart.png");
    const logoRatio = 100 / RNImage.resolveAssetSource(logo).height;
    const logoWidth = RNImage.resolveAssetSource(logo).width * logoRatio;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.page}>
          <Image
            source={logo}
            style={{
              height: 100,
              width: logoWidth,
            }}
          />
          <Text style={styles.logoText}>Human Finder</Text>

          <Button
            icon={faApple}
            title={i18n.t("ctnWithApple")}
            onPress={() => {
              loginWithApple().then(() => {
                console.log("Login with Apple successful");
                router.push("/flows/setup/where");
              });
            }}
          />

          <Button
            icon={faGoogle}
            title={i18n.t("ctnWithGoogle")}
            onPress={() => {
              loginWithGoogle();
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logoText: {
    color: "#fff",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  },
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
