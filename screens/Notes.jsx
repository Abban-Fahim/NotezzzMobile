import React, { useState, useEffect } from "react";
import Button from "./../components/Button";
import Text from "./../components/Text";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "./../components/Input";
import TextArea from "./../components/TextArea";
import { View, Animated } from "react-native";
import DashSVG from "../assets/images/dash";
import { PanGestureHandler } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import Loading from "./Loading";

function Notes({
  mainStyles,
  themeState,
  toggleTheme,
  route,
  user,
  navigation,
  ...rest
}) {
  // * this "form" refers
  const [formPosition, setFormPosition] = useState(-120);
  const [newNote, setNewNote] = useState({ title: "", body: "", color: "" });
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // * Onchange handler for the form where a new note is created
  function updateNewNote(value, field) {
    setNewNote((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  useEffect(() => {
    // * if no user exists, send'em back to the Auth route
    if (!user) {
      navigation.navigate("Auth");
    } else {
      crudOperands.fetchNotes();
    }
  }, []);

  // * All the operations that will interact with firebase firestore (database)
  const crudOperands = {
    fetchNotes: () => {
      setLoading(true);
      firestore()
        .collection(user.uid)
        .get()
        .then((docs) => {
          setLoading(false);
          if (docs.empty) {
            setNotes([]);
          } else {
            docs.docs.map((note) => {
              let receivedNote = { id: note.id, ...note.data() };
              // console.log(receivedNote);
              setNotes((prev) => {
                if (receivedNote !== prev) {
                  return [...prev, receivedNote];
                } else {
                  return [...prev];
                }
              });
            });
          }
        })
        .catch((err) => console.error(err));
    },
    createNote: () => {},
    updateNote: () => {},
    deleteNote: () => {},
  };

  // * this function handles the swipe up gesture for the pop up form in the bottom
  // * where a new note is made
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

  if (loading)
    return <Loading mainStyles={mainStyles} themeState={themeState} />;

  if (!loading)
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
                route.name === "Notes"
                  ? "person-circle-outline"
                  : "chevron-back"
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
        <Text>{user.email}</Text>
        {/* // @ <Swipeable>This is the note component</Swipeable> */}
        {notes.map}
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
