import React, { useState, useEffect } from "react";
import Button from "./../components/Button";
import Text from "./../components/Text";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "./../components/Input";
import TextArea from "./../components/TextArea";
import { View, Animated } from "react-native";
import DashSVG from "../assets/images/dash";
import { Swipeable, PanGestureHandler } from "react-native-gesture-handler";

function Notes({
  mainStyles,
  themeState,
  toggleTheme,
  route,
  user,
  navigation,
  ...rest
}) {
  const [formPosition, setFormPosition] = useState(-120);
  const [newNote, setNewNote] = useState({ title: "", body: "", color: "" });

  function updateNewNote(value, field) {
    setNewNote((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  useEffect(() => {
    if (!user) {
      navigation.navigate("Auth");
    }
  }, []);

  function handleGesture(e) {
    let distanceMoved = e.nativeEvent.y;
    setFormPosition((prev) => {
      let diff = prev - distanceMoved;
      if (diff > 0) {
        return 0;
      } else if (diff < -120) {
        return -120;
      } else {
        return diff;
      }
    });
  }

  return (
    <View style={mainStyles.main}>
      <View style={mainStyles.header}>
        {true ? (
          <Button type="icon" color="transparent">
            <Icon size={20} name="chevron-back" />
          </Button>
        ) : (
          <Icon size={20} name="person-circle-outline" />
        )}
        <Text style={{ flex: 1, textTransform: "capitalize" }} fontSize="40px">
          {route.name}
        </Text>
        <Button type="icon" onPress={toggleTheme}>
          <Icon size={20} name={themeState.isDark ? "moon" : "sunny"} />
        </Button>
      </View>
      <Text>{user.email}</Text>
      {/* // @ <Swipeable>This is the note component</Swipeable> */}
      <PanGestureHandler minDist={20} onGestureEvent={handleGesture}>
        <Animated.View
          style={[mainStyles.createForm, { bottom: formPosition }]}
        >
          <DashSVG />
          <Input
            value={newNote.title}
            onChangeText={(text) => updateNewNote(text, "title")}
          />
          <TextArea
            value={newNote.body}
            onChangeText={(text) => updateNewNote(text, "body")}
          />
          {/* //@ Color selection component, make in another file */}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default Notes;
