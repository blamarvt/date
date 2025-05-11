import { Stack } from "expo-router";
import { lockOrientation } from "../lib/util";

export const unstable_settings = {
  initialRouteName: "login",
};

export default function Layout() {
  lockOrientation();
  collectDeviceInfo();

  return (
    <Stack
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
