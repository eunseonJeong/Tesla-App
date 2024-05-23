import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewStyle from "../../constants/MapViewstyle.json";
import MapInput from "../components/MapInput";
import { UserLocationContext } from "../components/UserLocationContext";

function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
  return (
    location?.latitude && (
      <View style={styles.container}>
        <MapInput />

        <MapView
          style={styles.map}
          provider={MapView.PROVIDER_GOOGLE}
          customMapStyle={MapViewStyle}
          region={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
          />
        </MapView>
      </View>
    )
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "94%",
  },
});
