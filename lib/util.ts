import React from "react";
import { useDispatch } from "react-redux";
import DeviceInfo from "react-native-device-info";
import { getLocales } from "expo-localization";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Location from "expo-location";
import Constants from "expo-constants";

import { updateCurrentDevice } from "./user";

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
      console.log(Constants);
      const deviceInfo = {
        os: "",
        osVersion: "",
        languageCode: getLocales()[0].languageCode,
      };

      console.log("Device Info:", deviceInfo);

      const dispatch = useDispatch();
      dispatch(updateCurrentDevice(deviceInfo));
    };

    collectInfo();
  }, []);
}
