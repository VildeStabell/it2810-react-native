/**
 * This file contains helper functions that returns react-native components
 * using the correct color schema.
 */

import * as React from "react";
import {
  Text as DefaultText,
  View as DefaultView,
  Button as DefaultButton,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import scheme from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type ButtonProps = ThemeProps & DefaultButton["props"];

/**
 * Text is a component that returns a corresponding react native Text, using the
 * current color scheme, and the given props.
 * @param props is the same as the props for a react native Text.
 */

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

/**
 * View is a component that returns a corresponding react native View, using the
 * current color scheme, and the given props.
 * @param props is the same as the props for a react native View.
 */

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

/**
 * Button is a component that returns a corresponding react native Button, using the
 * current color scheme, and the given props.
 * @param props is the same as the props for a react native Button.
 */

export function Button(props: ButtonProps) {
  const { lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "button");

  return <DefaultButton color={color} {...otherProps} />;
}

/**
 * Icon is a component that returns a corresponding Material Icon, using the
 * current color scheme.
 * @param props contains the name of the Material Icon to use, and the
 * optional attribute size, to determine how big the icon should be.
 */

export function Icon(props: { name: string; size?: number }) {
  const theme = useColorScheme() === "dark" ? scheme.dark : scheme.light;
  return (
    <MaterialIcons
      size={props.size ? props.size : 30}
      style={{ marginBottom: -3 }}
      color={theme.tabIconDefault}
      {...props}
    />
  );
}
