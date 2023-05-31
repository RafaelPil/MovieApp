import HeaderComponent from "../../components/HeaderComponent";
import MovieComponent from "../../components/MovieComponent";
import MoviesComponents from "../../components/MoviesComponents";
import { View, Text } from "../../components/Themed";
import { StyleSheet, ScrollView } from "react-native";
import TopMoviesComponents from "../../components/TopMoviesComponent";
import FavouritesComponents from "../../components/FavouritesComponent";

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent />

      <MoviesComponents />
      <TopMoviesComponents />
      <FavouritesComponents />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
