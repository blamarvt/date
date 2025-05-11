import * as React from "react";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import LoginScreen from "./login";
import LoggedInScreen from "./flows/loggedin/_flow";
import SetupFlow from "./flows/setup/_flow";

import { lockOrientation } from "../lib/util";
import { store } from "../lib/store";

const Stack = createNativeStackNavigator();

export default function App() {
  lockOrientation();

  return (
    // HACK: id={undefined} gets rid of a red squiggly line in the editor
    <Provider store={store}>
      <GestureHandlerRootView>
        <Stack.Navigator id={undefined}>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SetupFlow"
            component={SetupFlow}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LoggedIn"
            component={LoggedInScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </Provider>
  );
}
