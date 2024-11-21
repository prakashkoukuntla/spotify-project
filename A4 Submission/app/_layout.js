import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ExternalView"
        options={{
          title: "Song details",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Preview"
        options={{
          title: "Song preview",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
