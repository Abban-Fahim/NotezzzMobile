import "@react-native-firebase/app";
import React from "react";
import {
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
} from "./imports";

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
                  <Stack.Screen name="Account">
                    {(props) => <Account {...props} {...propsForScreens} />}
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
