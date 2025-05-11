import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./profile";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faCog } from "@fortawesome/free-solid-svg-icons/faCog";
import { faInbox } from "@fortawesome/free-solid-svg-icons/faInbox";
import ExploreScreen from "./explore";
import SettingsScreen from "./settings";
import MessagesScreen from "./messages";

const Tab = createBottomTabNavigator();

export default function LoggedInScreen() {
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
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesomeIcon icon={faHeart} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarItemStyle: {
            backgroundColor: "#000",
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarItemStyle: {
            backgroundColor: "#000",
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faInbox} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faCog} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
