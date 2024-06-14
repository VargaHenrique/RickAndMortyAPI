import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CharacterDetails from "../screens/CharacterDetails";
import { StackParamList } from "../types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";


const AppRoutes = () => {
  const Stack = createNativeStackNavigator<StackParamList>();
  const Tab = createBottomTabNavigator();

  const StackRoutes = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          statusBarColor: "#252525",
          headerTintColor: "#fff",
          title: "Rick and Morty API",
          headerStyle: {
            backgroundColor: "#252525",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={CharacterDetails} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#252525",
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="ProductList"
        component={StackRoutes}
        options={{
          tabBarIcon: () => <Feather name="package" size={24} color="#fff" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
