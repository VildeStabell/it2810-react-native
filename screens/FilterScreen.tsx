import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Filters from "../components/Filters";

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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
