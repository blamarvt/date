import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserProfileLocationState {
  id: string;
  latitude: number;
  longitude: number;
  radius: number;
  radiusUnit: string;
}

export interface UserDeviceState {
  id: string;
  name: string;
  type: string;
  os: string;
  osVersion: string;
  appVersion: string;
  languageCode: string;
}

export interface UserProfileState {
  id: string;
  default: boolean;
  name: string;
  targetLocation: UserProfileLocationState;
}

export interface UserState {
  id: string | null;
  profile: UserProfileState | null;
  currentDevice: UserDeviceState | null;
}

const initialState: UserState = {
  id: null,
  profile: null,
  currentDevice: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // load: Used for loading the user data from the server
    load: (state, action) => {
      state.id = action.payload.id;
      state.profile = action.payload.profile;
      state.currentDevice = action.payload.currentDevice;
    },
    // updateProfile: Used for updating the user profile data
    updateProfile: (state, action) => {
      state.profile = {
        ...state.profile,
        ...action.payload,
      };
    },
    // updateCurrentDevice: Used for updating the current device data
    updateCurrentDevice: (state, action) => {
      state.currentDevice = {
        ...state.currentDevice,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { load, updateProfile } = userSlice.actions;

export default userSlice.reducer;
