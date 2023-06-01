import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React from "react";
import moviesData from "../assets/data/moviesData";
import MovieComponent from "./MovieComponent";

const MoviesComponents = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.headerText}>Movies</Text>
      <FlatList
        data={moviesData.slice(0, 4)}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <MovieComponent item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  headerText: {
    marginBottom: 10,
    color: "gray",
    marginLeft: 5,
    fontWeight: "500",
    fontSize: 14,
  },
});

export default MoviesComponents;
