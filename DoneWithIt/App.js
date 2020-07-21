import React from "react";
import { View, Text } from "react-native";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textAlign: "center",
        }}
      >
        I love react native! This is my first react native app! Here's some more
        text
      </Text>
      <AppText>I love react native</AppText>
      <AppText>Hi, hello</AppText>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}
