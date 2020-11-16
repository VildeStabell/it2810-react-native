import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import BookContainer from "../containers/BookContainer";
import Sort from "../containers/Sort";
import SearchField from "../components/SearchField";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.searchAndSort}>
        <SearchField />
        <Sort />
      </View>
      <BookContainer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchAndSort: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
});
