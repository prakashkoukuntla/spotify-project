import { WebView } from "react-native-webview";
import { useLocalSearchParams } from "expo-router";

export default function ExternalView() {
  const local = useLocalSearchParams();
  return <WebView source={{ uri: local.link }} />;
}
