import React from "react";
import { useDispatch } from "react-redux";
import { changeDetailedBook } from "../redux/actions";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Text, View } from "./Themed";

interface BookProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  navigation: any;
}

/**
 * Book is a representation of a book, with its title,
 * author and cover image.
 * @param props contains the id, title, author and url for a picture of the cover of the book
 * It also has a reference to the navigator used by the app, to make it possible to
 * send the user to the BookScreen when a book is selected.
 */
export default function Book(props: BookProps) {
  const dispatch = useDispatch();

  const handleBookClick = (id: string) => {
    dispatch(changeDetailedBook(id));
    props.navigation.navigate("Book");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleBookClick(props.id)}>
        <Image
          style={styles.bookImg}
          source={{ uri: props.cover }}
          accessibilityLabel="The book cover"
        />
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
        <Text style={styles.author} numberOfLines={1}>
          by {props.author}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    minWidth: 110,
    width: "35%",
    height: 200,
    margin: 5,
    padding: 10,
  },
  bookImg: {
    width: 100,
    height: 150,
    resizeMode: "cover",
  },
  author: {
    width: 100,
    height: 30,
  },
  title: {
    width: 100,
    height: 30,
    fontStyle: "italic",
  },
});

/*container: {
    display: "flex",
    minWidth: 110,
    width: '35%',
    height: '40%',
    margin: 5,
    padding: 10,
  },
  bookImg: {
    width: 100,
    height: 150,
    resizeMode: "cover",
  },
  author: {
    width: 100,
    height: 30,
  },
  title: {
    width: 100,
    height: 30,
    fontStyle: "italic",
  }*/
