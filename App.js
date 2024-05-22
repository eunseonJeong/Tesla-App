import { StyleSheet, View, Text, StatusBar } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import LoginScreen from "./app/screen/LoginScreen";
import { Colors } from "./constants/Colors";

SplashScreen.preventAutoHideAsync();

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function Page() {
  const [fontLoaded] = useFonts({
    "outfit-regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={
        "pk_test_c3RpcnJpbmctc2hyZXctMjUuY2xlcmsuYWNjb3VudHMuZGV2JA"
      }
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <LoginScreen />
        <StatusBar />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 25,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  logoImage: {
    width: 100,
    height: 40,
    objectFit: "contain",
  },
  bgImage: {
    width: "100%",
    height: 240,
    marginTop: 20,
    objectFit: "cover",
  },
});
