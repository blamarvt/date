import React from "react";

import * as ScreenOrientation from "expo-screen-orientation";
import * as Location from "expo-location";

export function lockOrientation() {
  React.useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    };

    lockOrientation();
  }, []);
}

export function requestLocation() {
  React.useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Location permission not granted");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync(location.coords);
      console.log("Current location:", address);
    };

    requestLocationPermission();
  }, []);
}

export function collectDeviceInfo() {
  React.useEffect(() => {
    const collectInfo = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Location permission not granted");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync(location.coords);
      console.log("Current location:", address);
    };

    collectInfo();
  }, []);
}
