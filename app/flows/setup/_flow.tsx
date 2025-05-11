import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons/faEarthAmericas";

import WhereSetupScreen from "./where";

const Tab = createBottomTabNavigator();

export default function SetupFlow() {
  return (
    <Tab.Navigator
      id={undefined} // HACK: This gets rid of a red squiggly line in the editor
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Where"
        component={WhereSetupScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            // Note: This is american-centric, would be nice to have this change based on the user's location
            return (
              <FontAwesomeIcon
                icon={faEarthAmericas}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
