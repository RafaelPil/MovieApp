import { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import MoviesComponents from "../../components/MoviesComponents";
import { StyleSheet, ScrollView } from "react-native";
import TopMoviesComponents from "../../components/TopMoviesComponent";
import FavouritesComponents from "../../components/FavouritesComponent";
import moviesData from "../../assets/data/moviesData";

export default function TabOneScreen() {
  const [searchTitle, setSearchTitle] = useState("");

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent setSearchTitle={setSearchTitle} />

      <MoviesComponents movies={filteredMovies} />
      <TopMoviesComponents movies={filteredMovies} />
      <FavouritesComponents movies={filteredMovies} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
