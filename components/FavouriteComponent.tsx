import { View, Text } from "../components/Themed";
import { StyleSheet, Image, useWindowDimensions } from "react-native";

export type MovieProps = {
  id: string;
  title: string;
  image: string;
  genre: string;
  description: string;
};

type MovieComponentProps = {
  item: MovieProps;
};

const FavouriteComponent = ({ item }: MovieComponentProps) => {
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, { width: width - 200 }]}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 0.8,
    borderColor: "#eee",
  },
});

export default FavouriteComponent;
