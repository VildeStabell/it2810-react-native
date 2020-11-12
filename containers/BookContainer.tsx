import React from "react";
import Book from "../components/Book";
import { useSelector } from "react-redux";
import { View } from "../components/Themed";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_BY_SEARCH } from "../constants/Queries";
import { BOOK_URL } from "../constants/Urls";
import { StyleSheet, FlatList } from "react-native";
import Pagination from "../components/Pagination";

/**
 * BookContainer is a component that displays the books specified in bookData, and lets you move between pages.
 * @var bookPage is used to know which page of books the user is currently seeing.
 * @var phonePage is used to decide if the book-container should be shown.
 * @props booksData is the books to render.
 */

export default function BookContainer() {
  const bookPage: any = useSelector((state: any) => state.bookPage.bookPage);
  const search: string = useSelector((state: any) => state.search.searchString);
  const filters: string[] = useSelector((state: any) => state.filter.filters);
  const sortBy: string = useSelector((state: any) => state.sortBy.sortBy);
  const { data } = useQuery(GET_BOOKS_BY_SEARCH, {
    variables: {
      search: search,
      filters: filters,
      page: bookPage,
      size: 18,
      sortBy: sortBy,
    },
    context: { uri: BOOK_URL },
  });

  const renderBook = ({ item }: any) => {
    return (
      <Book
        key={item.id}
        id={item.id}
        title={item.title}
        author={item.author !== "" ? item.author : "Unknown"}
        cover={item.image}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.booksBySearch}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
        ListHeaderComponent={<Pagination />}
        ListFooterComponent={<Pagination />}
        contentContainerStyle={styles.list}
        style={styles.test}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "center",
    margin: 0,
  },
  list: {
    display: "flex",
    alignItems: "stretch",
  },
  test: {
    display: "flex",
  },
});
