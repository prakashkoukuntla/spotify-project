import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { Images, Themes } from "../assets/Themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Images.spotify} style={styles.image}></Image>
      <Text style={styles.text}>My Top Tracks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: "center",
  },
  image: {
    aspectRatio: 1,
    width: "6%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: Themes.colors.white,
  },
});

export default Header;
