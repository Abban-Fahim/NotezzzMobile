import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components";
import useTheme from "./components/theme";
import useMainStyles from "./styles/main-styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Notes from "./screens/Notes";
import Auth from "./screens/Auth";
import "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const App = () => {
  const [themeState, setTheme] = useTheme();
  const mainStyles = useMainStyles(themeState);
  const [user, setUser] = useState();

  function toggleTheme() {
    setTheme((prev) => {
      return { ...prev, isDark: !prev.isDark };
    });
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "734541309297-906u2va9bt6ncbbc87a7fc6sf7113739.apps.googleusercontent.com",
    });
    auth().onAuthStateChanged((user) => {
      console.log(user, "ladies and gentlemen, we got'em");
      setUser(user);
    });
  }, []);

  const propsForScreens = {
    themeState: themeState,
    setTheme: setTheme,
    toggleTheme: toggleTheme,
    mainStyles: mainStyles,
    user: user,
    setUser: setUser,
  };

  const Stack = createStackNavigator();

  return (
    <ThemeProvider theme={themeState}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <View style={mainStyles.main}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {user ? (
                <>
                  <Stack.Screen name="Notes">
                    {(props) => <Notes {...props} {...propsForScreens} />}
                  </Stack.Screen>
                </>
              ) : (
                <>
                  <Stack.Screen name="Auth">
                    {(props) => <Auth {...props} {...propsForScreens} />}
                  </Stack.Screen>
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
