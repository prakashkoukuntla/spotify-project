import { useState, useEffect } from "react";
import getEnv from "./env";

import { getMyTopTracks, getAlbumTracks } from "./apiOptions";

const { ALBUM_ID } = getEnv();

const useSpotifyTracks = (token, limit, setLoading) => {
  const [myTopTracks, setMyTopTracks] = useState(null);
  useEffect(() => {
    const setMyTopTracksHandler = async () => {
      if (token) {
        setMyTopTracks(await getMyTopTracks(token, limit));
      }
      setLoading(false);
    };
    setMyTopTracksHandler();
  }, [token, limit]);
  return myTopTracks;
};

export default useSpotifyTracks;
