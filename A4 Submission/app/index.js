import {
  Pressable,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "../utils";
import { Images, Themes } from "../assets/Themes";
import Song from "./Song";
import Header from "./Header";
import { useState } from "react";

const renderSong = ({ item }) => {
  return (
    <Song
      album={item.albumName}
      duration={item.duration}
      image={item.imageUrl}
      title={item.songTitle}
      artist={item.songArtists}
      previewUrl={item.previewUrl}
      externalUrl={item.externalUrl}
    ></Song>
  );
};

export default function App() {
  const [limit, setLimit] = useState(20);
  const { token, getSpotifyAuth } = useSpotifyAuth();
  const [loading, setLoading] = useState(false);
  tracks = useSpotifyTracks(token, limit, setLoading);
  StatusBar.setBarStyle("light-content");

  const changeLoading = () => {
    setLoading(true);
    setLimit(limit + 20);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!token && (
        <Pressable
          style={styles.connectButton}
          onPress={() => getSpotifyAuth()}
        >
          <Image style={styles.spotifyLogo} source={Images.spotify}></Image>
          <Text style={styles.connectButtonText}>CONNECT WITH SPOTIFY</Text>
        </Pressable>
      )}
      {token && <Header />}
      {token && (
        <FlatList
          style={styles.list}
          data={tracks}
          renderItem={renderSong}
          keyExtractor={(song) => song.title}
          onEndReached={changeLoading}
        ></FlatList>
      )}
      {loading && <ActivityIndicator />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  connectButton: {
    backgroundColor: Themes.colors.spotify,
    borderRadius: 100,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  connectButtonText: {
    color: Themes.colors.white,
  },
  spotifyLogo: {
    aspectRatio: 1,
    width: 30,
  },
  list: {
    flex: 1,
    width: "100%",
    height: "80%",
    gap: 50,
  },
});
