import React from "react";
import { View } from "react-native";
import Button from "../components/Button";
import StyledText from "../components/Text";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

async function signInWithGoogle() {
  try {
    const { idToken } = await GoogleSignin.signIn();
    const cred = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(cred);
  } catch ({ ...err }) {
    console.error(err);
  }
}

const Auth = ({ mainStyles, navigation, setUser, ...props }) => {
  console.log(props);
  return (
    <View style={mainStyles.main}>
      <StyledText>Hello</StyledText>
      <Button type="filled" onPress={signInWithGoogle}>
        Google
      </Button>
    </View>
  );
};

export default Auth;
