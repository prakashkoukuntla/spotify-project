import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";

export default function Preview() {
  const local = useLocalSearchParams();
  return <WebView source={{ uri: local.link }} />;
}
