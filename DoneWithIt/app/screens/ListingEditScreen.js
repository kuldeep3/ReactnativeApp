import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/FormPicker";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "lamp" },
  { label: "Cars", value: 2, backgroundColor: "orange", icon: "car" },
  { label: "Camera", value: 3, backgroundColor: "gold", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "lightgreen", icon: "cards" },
  { label: "Clothing", value: 5, backgroundColor: "aqua", icon: "shopping" },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "dodgerblue",
    icon: "baseball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "lightblue",
    icon: "music",
  },
  { label: "Books", value: 8, backgroundColor: "violet", icon: "book" },
  { label: "Other", value: 9, backgroundColor: "grey", icon: "file" },
];

function ListingEditScreen(params) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLine={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListingEditScreen;
