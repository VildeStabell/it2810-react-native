import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckBox } from "react-native-elements";
import { View } from "./Themed";
import { addFilter, changeBookPage, removeFilter } from "../redux/actions";
import { StyleSheet } from "react-native";

/**
 * FilterMenu is is a component that shows the different Checkboxes a user can select
 * to filter what books are shown.
 * @var filters is an array of strings, containing the currently selected filters.
 * @var bookPage is the number representing which page of books is being shown on the
 * main page. This is changed to 0 as the filters are updated, to avoid problems with the
 * page number being higher than possible pages.
 */

export default function FilterMenu() {
  const dispatch = useDispatch();
  const filters: any = useSelector((state: any) => state.filter.filters);
  const bookPage: number = useSelector((state: any) => state.bookPage.bookPage);

  function isChecked(name: string): boolean {
    return filters.includes(name);
  }

  const updateFilters = (text: string) => {
    if (filters.includes(text)) {
      dispatch(removeFilter(text));
    } else {
      dispatch(addFilter(text));
    }
    if (bookPage > 0) {
      dispatch(changeBookPage(0));
    }
  };

  return (
    <View style={styles.container}>
      <CheckBox
        title="Calendars"
        checked={isChecked("Calendars")}
        onPress={() => updateFilters("Calendars")}
      />
      <CheckBox
        title="Comics & Graphic Novels"
        checked={isChecked("Comics & Graphic Novels")}
        onPress={() => updateFilters("Comics & Graphic Novels")}
      />
      <CheckBox
        title="Humor & Entertainment"
        checked={isChecked("Humor & Entertainment")}
        onPress={() => updateFilters("Humor & Entertainment")}
      />
      <CheckBox
        title="Literature & Fiction"
        checked={isChecked("Literature & Fiction")}
        onPress={() => updateFilters("Literature & Fiction")}
      />
      <CheckBox
        title="Mystery, Thriller & Suspense"
        checked={isChecked("Mystery, Thriller & Suspense")}
        onPress={() => updateFilters("Mystery, Thriller & Suspense")}
      />
      <CheckBox
        title="Romance"
        checked={isChecked("Romance")}
        onPress={() => updateFilters("Romance")}
      />
      <CheckBox
        title="Science Fiction & Fantasy"
        checked={isChecked("Science Fiction & Fantasy")}
        onPress={() => updateFilters("Science Fiction & Fantasy")}
      />
      <CheckBox
        title="Test Preparation"
        checked={isChecked("Test Preparation")}
        onPress={() => updateFilters("Test Preparation")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "scroll",
  },
});
