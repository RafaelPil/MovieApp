import HeaderComponent from "../../components/HeaderComponent";
import MovieComponent from "../../components/MovieComponent";
import MoviesComponents from "../../components/MoviesComponents";
import { View, Text } from "../../components/Themed";
import { StyleSheet } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HeaderComponent />

      <MoviesComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
