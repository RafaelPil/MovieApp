import { useSearchParams } from "expo-router";
import DetailedScreenComponent from "../../components/DetailedScreenComponent";
import moviesData from "../../assets/data/moviesData";
import { Text } from "../../components/Themed";

const Movie = () => {
  const { id } = useSearchParams();
  // console.warn(id);

  const movie = moviesData.find((m) => m?.id === id);

  if (!movie) {
    return <Text>Movie {id} not found</Text>;
  }

  return <DetailedScreenComponent movie={movie} />;
};

export default Movie;
