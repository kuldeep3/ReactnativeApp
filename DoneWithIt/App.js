import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { Switch } from "react-native";
import AppTextInput from "./app/components/TextInput";
import AppPicker from "./app/components/Picker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  // const categories = [
  //   { label: "Furniture", value: 1 },
  //   { label: "Food", value: 2 },
  //   { label: "Clothing", value: 3 },
  // ];
  // const [category, setCategory] = useState(categories[0]);
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
  );
}
