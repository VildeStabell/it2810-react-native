import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Text, View } from "./Themed";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBookPage } from "../redux/actions";

/**
 * Pagination is a component that lets a user page though the set of books shown,
 * so that they can be dynamically loaded, instead of retrieving the entire set at once.
 * @var bookPage is the number representing which page of books is being shown on the
 * main page.
 */

export default function Pagination() {
  const dispatch = useDispatch();
  const bookPage: any = useSelector((state: any) => state.bookPage.bookPage);

  const changeBookPageHandler = (increase: boolean) => {
    if (bookPage > 0 && !increase) {
      dispatch(changeBookPage(bookPage - 1));
    } else if (increase) {
      dispatch(changeBookPage(bookPage + 1));
    }
  };

  const showingBookPage: string = String(bookPage + 1);

  return (
    <View style={styles.pagination}>
      {bookPage > 0 ? (
        <TouchableOpacity
          onPress={() => changeBookPageHandler(false)}
          accessibilityLabel="Go back to previous book page"
          style={styles.pageBtn}
        >
          <Icon name="arrow-back" />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.pageTxt}>{"Page " + showingBookPage}</Text>
      <TouchableOpacity
        onPress={() => changeBookPageHandler(true)}
        accessibilityLabel="Go back to previous book page"
        style={styles.pageBtn}
      >
        <Icon name="arrow-forward" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    marginVertical: 20,
    marginHorizontal: 0,
    display: "flex",
    flexDirection: "row",
    flexBasis: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  pageBtn: {
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: 10,
    height: 34,
    marginVertical: 0,
    marginHorizontal: 10,
  },
  pageTxt: {
    paddingVertical: 0,
    paddingHorizontal: 5,
  },
});
