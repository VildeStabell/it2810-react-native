/**
 * The navbar at the bottom of the screen.
 */

import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import FilterScreen from "../screens/FilterScreen";
import HomeScreen from "../screens/HomeScreen";
import BookScreen from "../screens/BookScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  BookParamList,
  BottomTabParamList,
  FilterParamList,
  HomeParamList,
  ProfileParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Filter"
        component={FilterNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="filter-list" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Book"
        component={BookNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="account-circle" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack
const FilterStack = createStackNavigator<FilterParamList>();

function FilterNavigator() {
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen
        name={"FilterScreen"}
        component={FilterScreen}
        options={{ headerTitle: "Filters" }}
      />
    </FilterStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}

const BookStack = createStackNavigator<BookParamList>();

function BookNavigator() {
  return (
    <BookStack.Navigator>
      <BookStack.Screen
        name={"BookScreen"}
        component={BookScreen}
        options={{ headerTitle: "Book" }}
      />
    </BookStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={"ProfileScreen"}
        component={ProfileScreen}
        options={{ headerTitle: "Profile" }}
      />
    </ProfileStack.Navigator>
  );
}
