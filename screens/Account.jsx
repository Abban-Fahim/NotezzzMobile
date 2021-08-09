import React from "react";
import { View } from "react-native";
import Text from "../components/Text";
import Button from "../components/Button";
import Icon from "react-native-vector-icons/Ionicons";
import { auth } from "../imports";

const Account = ({
  mainStyles,
  themeState,
  toggleTheme,
  route,
  user,
  navigation,
}) => {
  return (
    <View style={mainStyles.main}>
      <View style={mainStyles.header}>
        <Button
          onPress={() =>
            route.name === "Notes"
              ? navigation.navigate("Account")
              : navigation.goBack()
          }
          type="icon"
          color="transparent"
        >
          <Icon
            size={30}
            name={
              route.name === "Notes" ? "person-circle-outline" : "chevron-back"
            }
          />
        </Button>
        <Text style={{ flex: 1 }} fontSize="40px">
          {route.name}
        </Text>
        <Button type="icon" onPress={toggleTheme}>
          <Icon size={20} name={themeState.isDark ? "moon" : "sunny"} />
        </Button>
      </View>
      <Button
        color="secondary"
        type="filled"
        onPress={() => auth().signOut().then(null)}
      >
        Logout
      </Button>
    </View>
  );
};

export default Account;
