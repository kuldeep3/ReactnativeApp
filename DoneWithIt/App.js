import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

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
    <LoginScreen />
  );
}
