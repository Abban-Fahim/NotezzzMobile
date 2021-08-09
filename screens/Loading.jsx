import React from "react";
import { View } from "react-native";
import StyledText from "../components/Text";

const Loading = ({ mainStyles, themeState }) => {
  return (
    <View
      style={[
        mainStyles.main,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <StyledText fontSize="30px">Loading...</StyledText>
    </View>
  );
};

export default Loading;
