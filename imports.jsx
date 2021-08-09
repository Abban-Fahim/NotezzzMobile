import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components";
import useTheme from "./components/theme";
import useMainStyles from "./styles/main-styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Notes from "./screens/Notes";
import Auth from "./screens/Auth";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import Account from "./screens/Account";

export {
  useEffect,
  useState,
  SafeAreaView,
  StatusBar,
  View,
  ThemeProvider,
  useTheme,
  useMainStyles,
  NavigationContainer,
  createStackNavigator,
  Notes,
  Auth,
  auth,
  GoogleSignin,
  Account,
};
