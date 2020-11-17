import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLoginStatus } from "../redux/actions";
import { AUTH_URL } from "../constants/Urls";
import { Icon, Button, Text, View } from "./Themed";
import { Input } from "react-native-elements";
import { StyleSheet } from "react-native";

interface UserFormProps {
  isLoginForm: boolean;
}

/**
 * Form to handle user authentication (register or login).
 *
 * @param isLoginForm states whether the form to be displayed
 *    is a login form or a register form.
 * @param toggleForm toggles the form on submit or escaping.
 * @var username the data typed into the username-input
 * @var password the data typed into the password-input
 * @var passwordConfirmation the data typed into the password-
 *    confirmation-input
 * @var formFeedback is the feedback given to the user on submit.
 */
export default function UserForm(props: UserFormProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [formFeedback, setFormFeedback] = useState<string>("");
  const dispatch = useDispatch();

  const validateInput = () => {
    if (username && password) {
      if (props.isLoginForm) {
        authenticateUser();
      } else {
        if (passwordConfirmation && password === passwordConfirmation) {
          authenticateUser();
        } else setFormFeedback("Password and Confirmed password do not match!");
      }
    } else setFormFeedback("Please fill out all fields.");
  };

  const authenticateUser = () => {
    fetch(props.isLoginForm ? AUTH_URL + "login" : AUTH_URL + "register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (props.isLoginForm) {
          setFormFeedback("Invalid username or password");
        } else {
          setFormFeedback("Username already exists");
        }
      })
      .then((data) => {
        dispatch(changeLoginStatus(true, data.data.token));
        return data;
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "username") {
      setUsername(value);
    } else if (field === "password") {
      setPassword(value);
    } else if (field === "confirm-password") {
      setPasswordConfirmation(value);
    }
    setFormFeedback("");
  };

  return (
    <View>
      <Input
        style={styles.input}
        label={"Username"}
        value={username}
        placeholder="Type username"
        onChangeText={(value) => handleInputChange("username", value)}
        leftIcon={<Icon name="person" />}
      />
      <Input
        style={styles.input}
        label="Password"
        value={password}
        placeholder="Type password"
        onChangeText={(value) => handleInputChange("password", value)}
        leftIcon={<Icon name="lock" />}
        secureTextEntry={true}
      />
      {/* Is only visible on register form */}
      {props.isLoginForm ? null : (
        <Input
          style={styles.input}
          label="Confirm password"
          value={passwordConfirmation}
          placeholder="Confirm password"
          onChangeText={(value) => handleInputChange("confirm-password", value)}
          leftIcon={<Icon name="lock" />}
          secureTextEntry={true}
        />
      )}
      <Text style={styles.bold}>{formFeedback}</Text>
      <Button
        title={props.isLoginForm ? "Sign in" : "Register"}
        onPress={validateInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  input: {
    color: "#fff",
  },
});
