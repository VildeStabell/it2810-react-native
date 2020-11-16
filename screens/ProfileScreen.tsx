import * as React from "react";
import { StyleSheet } from "react-native";

import { Button, Text, View } from "../components/Themed";
import Profile from "../components/Profile";
import UserForm from "../components/UserForm";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ProfileScreen() {
  const isLoggedIn: boolean = useSelector(
    (state: any) => state.loginStatus.loginStatus
  );
  const [displayRegisterForm, changeDisplayRegisterForm] = useState<boolean>(
    false
  );

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <Profile />
      ) : (
        <View>
          {displayRegisterForm ? (
            <View>
              <Text style={styles.title}>Register user</Text>
              <UserForm isLoginForm={false} />
              <Text style={styles.changeForm}>
                Already got a user? Sign in here!
              </Text>
              <Button
                title="Sign in to existing user"
                onPress={() => changeDisplayRegisterForm(false)}
                accessibilityLabel="Press to go to sign in form"
              />
            </View>
          ) : (
            <View>
              <Text style={styles.title}>Sign in</Text>
              <UserForm isLoginForm={true} />
              <Text style={styles.changeForm}>
                Don't have a user yet? Create one here!
              </Text>
              <Button
                title="Create new user"
                onPress={() => changeDisplayRegisterForm(true)}
                accessibilityLabel="Press to go to register form"
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    alignSelf: "center",
  },
  changeForm: {
    padding: 20,
    paddingTop: 50,
  },
});
