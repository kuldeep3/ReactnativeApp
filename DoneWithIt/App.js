import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
      <AppPicker placeholder="Category" />
      <AppTextInput placeholder="Email" />
    </Screen>
  );
}
