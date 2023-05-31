import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";

const Detailed = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: "https://i.ytimg.com/vi/yjRHZEUamCc/maxresdefault.jpg" }}
        style={styles.image}
      />

      <View style={styles.imdbContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>IMDB 7.0</Text>
        </View>
      </View>
      <Text style={styles.title}>John Wick 4</Text>

      <View style={styles.descriptionStyle}>
        <Text style={styles.descriptionText}>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    overflow: "hidden",
  },
  imdbContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#333",
    backgroundColor: "#f3ce13",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 35,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "#eee",
  },
  descriptionStyle: {
    paddingHorizontal: 10,
  },
  descriptionText: {
    color: "#eee",
  },
});

export default Detailed;
