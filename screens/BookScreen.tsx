import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import BookDetails from "../components/BookDetails";

/**
 * The screen showing a detailed version of a specific book.
 */

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
});
