import React, { useState } from "react";
import { changeSearch, changeBookPage } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "./Pagination";
import { View } from "./Themed";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

/**
 * SearchField is a component for the search field itself and the
 * search button.
 * @var searchValue keeps the value to search on, and is updated when the input is changed.
 * @var bookPage is used to start at page 0 again when we search for something new.
 */

export default function SearchField() {
  const [searchValue, changeSearchValue] = useState<string>("");
  const bookPage: number = useSelector((state: any) => state.bookPage.bookPage);
  const dispatch = useDispatch();

  const updateSearch = () => {
    dispatch(changeSearch(searchValue));
    if (bookPage > 0) {
      dispatch(changeBookPage(0));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for books or authors"
        onChangeText={(text) => changeSearchValue(text)}
        onSubmitEditing={updateSearch}
      />
      <TouchableOpacity
        accessibilityLabel="Submit search"
        onPress={updateSearch}
      >
        <Icon name="search" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    minWidth: 280,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "85%",
    borderTopWidth: 2,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderStyle: "solid",
    backgroundColor: "#f9f9f9",
    padding: 5,
  },
});
