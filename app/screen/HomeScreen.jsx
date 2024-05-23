import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewStyle from "../../constants/MapViewstyle.json";
import MapInput from "../components/MapInput";
import { UserLocationContext } from "../components/UserLocationContext";
import Header from "../components/Header";

function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
  return (
    location?.latitude && (
      <View>
        <View style={styles.headerContainer}>
          <Header />
          <MapInput searchedLocation={(location) => console.log(location)} />
        </View>

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
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
