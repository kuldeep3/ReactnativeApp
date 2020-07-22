import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Macbook Pro for sale",
    price: 1200,
    image: require("../assets/laptop.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 800,
    image: require("../assets/couch.jpg"),
  },
];

function ListingScreen(params) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.lightgrey,
  },
});

export default ListingScreen;
