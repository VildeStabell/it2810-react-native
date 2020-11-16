import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSortBy, changeBookPage } from "../redux/actions";
import { Icon } from "../components/Pagination";
import { Text, View } from "../components/Themed";
import { StyleSheet, TouchableOpacity } from "react-native";

/**
 * SearchFiledAndSort is a component that contains the searchfield and the
 * button and dropdown for sorting elements.
 * @var phonePage is used to decide if the search-field and sort-button
 * should be shown.
 * @var bookPage is used to start at page 0 again when we search for something new.
 */

export default function Sort() {
  const bookPage: number = useSelector((state: any) => state.bookPage.bookPage);
  const sortBy: string = useSelector((state: any) => state.sortBy.sortBy);
  const [displayDropdown, updateDisplayDropdown] = useState<boolean>(false);
  const dispatch = useDispatch();

  const updateSort = (sortBy: string) => {
    dispatch(updateSortBy(sortBy));
    if (bookPage > 0) {
      dispatch(changeBookPage(0));
    }
    toggleDropdown();
  };

  const toggleDropdown = () => {
    updateDisplayDropdown(!displayDropdown);
  };

  return (
    <View style={styles.sort}>
      <TouchableOpacity
        accessibilityLabel="Toggle sort menu"
        style={styles.sortBtn}
        onPress={toggleDropdown}
      >
        <Icon name="sort-by-alpha" />
      </TouchableOpacity>
      {displayDropdown ? (
        <View style={styles.sortContent}>
          <TouchableOpacity
            accessibilityLabel="Sort by Title (A-Z)"
            style={styles.sortBtn}
            onPress={() => {
              updateSort("title");
            }}
          >
            <Text>Title (A-Z)</Text>
            {sortBy === "title" ? <Icon name="check" /> : null}
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Sort by Title (Z-A)"
            style={styles.sortBtn}
            onPress={() => {
              updateSort("-title");
            }}
          >
            <Text>Title (Z-A)</Text>
            {sortBy === "-title" ? <Icon name="check" /> : null}
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Sort by Author (A-Z)"
            style={styles.sortBtn}
            onPress={() => {
              updateSort("author");
            }}
          >
            <Text>Author (A-Z)</Text>
            {sortBy === "author" ? <Icon name="check" /> : null}
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Sort by Author (Z-A)"
            style={styles.sortBtn}
            onPress={() => {
              updateSort("-author");
            }}
          >
            <Text>Author (Z-A)</Text>
            {sortBy === "-author" ? <Icon name="check" /> : null}
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  sort: {
    position: "relative",
    display: "flex",
    marginLeft: 15,
    marginVertical: 10,
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
    //minWidth: 350,
  },
  sortBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
    paddingHorizontal: 10,
    height: 36,
    marginTop: 2,
  },
  sortContent: {
    display: "flex",
    minWidth: 160,
    zIndex: 5,
    shadowOffset: { height: 0, width: 8 },
    shadowRadius: 16,
  },
});
