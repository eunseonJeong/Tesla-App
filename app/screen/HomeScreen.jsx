import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewStyle from "../../constants/MapViewstyle.json";
import MapInput from "../components/MapInput";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={MapView.PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle}
      />
      <MapInput />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
