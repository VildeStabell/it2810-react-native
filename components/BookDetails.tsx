import React from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_BOOK_BY_ID } from "../constants/Queries";
import { BOOK_URL } from "../constants/Urls";
import { Text, View } from "./Themed";
import { Image, StyleSheet } from "react-native";

/**
 * BookDetail is a component that will show the details of a chosen book.
 * @var phonePage uses redux store to decide if the component should be shown.
 * @var bookId is the id of the book currently being displayed.
 * @var token is the current users jwt token.
 * @var data is a book retrieved from the database.
 */

export default function BookDetails() {
  const bookId: any = useSelector((state: any) => state.id.id);

  const { data } = useQuery(GET_BOOK_BY_ID, {
    variables: { id: bookId },
    context: { uri: BOOK_URL },
  });

  let title: string = "";
  let author: string = "";
  let cover: string = "";
  let genres: Array<string> = [""];

  if (data) {
    title = data?.bookById?.title;
    author = data?.bookById?.author;
    cover = data?.bookById?.image;
    genres = data?.bookById?.genres;
  }
  console.log("Cover: ", cover);
  console.log("Title: ", title);

  if (bookId !== "") {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bookImg}
          source={{ uri: cover }}
          accessibilityLabel={"The book cover of " + title}
        />
        <Text style={styles.title}>
          Title:
          <Text style={styles.innerText}> {title}</Text>
        </Text>
        <Text style={styles.baseText}>
          Author:
          <Text style={styles.innerText}> {author ? author : "Unknown"}</Text>
        </Text>
        <Text style={styles.baseText}>
          Genres:
          {genres.map((genre) => {
            return (
              <Text key={genre} style={styles.innerText}>
                {" "}
                {genre}
              </Text>
            );
          })}
        </Text>
      </View>
    );
  } else {
    return (
      <Text style={styles.noBook}>
        To display details about a book, go to "home" and click on a book
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    textAlign: "center",
    margin: 10,
    marginBottom: 50,
  },
  bookImg: {
    width: 200,
    height: 300,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  baseText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  innerText: {
    fontStyle: "italic",
    fontWeight: "normal",
  },
  noBook: {
    margin: 30,
    display: "flex",
    alignSelf: "center",
    textAlign: "center",
  },
});
