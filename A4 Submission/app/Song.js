import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

const songArtists = (artists) => {
  output = artists[0].name;
  for (i = 1; i < artists.length; i++) {
    output += ", ";
    output += artists[i].name;
  }
  return output;
};

const Song = ({
  image,
  title,
  artist,
  album,
  duration,
  externalUrl,
  previewUrl,
}) => {
  return (
    <Link
      href={{
        pathname: "./ExternalView",
        params: { link: externalUrl },
      }}
      asChild
    >
      <Pressable style={styles.container}>
        <Link
          href={{
            pathname: "./Preview",
            params: { link: previewUrl },
          }}
          asChild
        >
          <Pressable style={styles.playButtonContainer}>
            <AntDesign
              style={styles.playButton}
              name="play"
              size={20}
              color="green"
            />
          </Pressable>
        </Link>

        <Image src={image} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {songArtists(artist)}
          </Text>
        </View>
        <Text style={styles.album} numberOfLines={1}>
          {album}
        </Text>
        <Text style={styles.duration} numberOfLines={1}>
          {millisToMinutesAndSeconds(duration)}
        </Text>
      </Pressable>
    </Link>
  );
};

export default Song;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    margin: 10,
  },
  playButtonContainer: {
    marginRight: 10,
    flex: 1,
  },
  image: {
    aspectRatio: 1,
    width: "18%",
  },
  titleContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    color: Themes.colors.white,
    textAlignVertical: "bottom",
    fontSize: 10,
  },
  artist: {
    color: Themes.colors.gray,
    fontSize: 10,
  },
  album: {
    flex: 4,
    color: Themes.colors.white,
    padding: 10,
    fontSize: 10,
  },
  duration: {
    flex: 1.5,
    color: Themes.colors.white,
    fontSize: 10,
  },
});
