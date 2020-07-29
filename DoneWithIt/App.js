import React, { useState, useEffect } from "react";
import Screen from "./app/components/Screen";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { Switch, Button, Image } from "react-native";
import AppTextInput from "./app/components/TextInput";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  // const requestPermission = async () => {
  //   const { granted } = await ImagePicker.requestCameraPermissionsAsync();
  //   if (!granted) alert("You need to enable permission to access the library.");
  // };
  // useEffect(() => {
  //   requestPermission();
  // }, []);
  // const categories = [
  //   { label: "Furniture", value: 1 },
  //   { label: "Food", value: 2 },
  //   { label: "Clothing", value: 3 },
  // ];
  // const [category, setCategory] = useState(categories[0]);

  // const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };

  return (
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    // </Screen>
    // <LoginScreen />
    <ListingEditScreen />

    // <Screen>
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAdd}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>
  );
}
