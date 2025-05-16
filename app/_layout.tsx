import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { collectDeviceInfo, lockOrientation } from "../lib/util";
import { useFonts } from "expo-font";
import { View } from "react-native";
import { useEffect } from "react";

export const unstable_settings = {
  initialRouteName: "login",
};

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  lockOrientation();
  collectDeviceInfo();

  const [loaded, error] = useFonts({});

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      setTimeout(SplashScreen.hideAsync, 2000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
