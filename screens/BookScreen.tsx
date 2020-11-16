import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import BookDetails from "../components/BookDetails";

export default function BookScreen() {
  return (
    <View style={styles.container}>
      <BookDetails />
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
