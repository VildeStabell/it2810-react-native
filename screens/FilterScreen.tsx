import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Filters from "../components/Filters";

/**
 * The screen allowing the user to select what filters to filter
 * the books on the home page by.
 */

export default function FilterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genres to show</Text>
      <Filters />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },
});
