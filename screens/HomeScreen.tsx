import * as React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "../components/Themed";
import BookContainer from "../containers/BookContainer";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <BookContainer />
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
