import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginStatus } from "../redux/actions";
import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "../constants/Queries";
import { USER_URL } from "../constants/Urls";
import { Text, View } from "./Themed";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "./Pagination";

/**
 * Profile is a component for the applications profile-page. It shows the users username,
 * and could hold other information like the users preferred books, when such functionality
 * is implemented.
 * @var username is the user's username.
 * @var token is the current users jwt token.
 */

export default function Profile() {
  const token: string = useSelector((state: any) => state.loginStatus.token);
  const { data } = useQuery(GET_USER_INFO, {
    variables: {
      token: token,
    },
    context: { uri: USER_URL },
  });
  const dispatch = useDispatch();

  let username: string = "";
  if (data) {
    username = data?.userInfo?.username;
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Icon name="account-circle" size={160} />
        <Text style={styles.text}>Username: <Text style={styles.username}> {username}</Text></Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => dispatch(changeLoginStatus(false, ""))}>
        <Icon name="exit-to-app" />
        <Text> Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20%",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    padding: 5,
  },
  username: {
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#fa8072",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    margin: "40%",
    padding: 10,
    borderRadius: 2,
    width: "30%",
  }
});
