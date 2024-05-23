import React from "react";
import { StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

function MapInput() {
  return (
    <GooglePlacesAutocomplete
      minLength={2}
      placeholder="장소를 검색해보세요!"
      query={{
        key: "API 키",
        language: "ko",
        components: "country:kr",
      }}
      keyboardShouldPersistTaps={"handled"}
      fetchDetails={true}
      onPress={(data, details) => {
        console.log(data, details);
      }}
      onFail={(error) => console.log(error)}
      onNotFound={() => console.log("no results")}
      keepResultsAfterBlur={true}
      enablePoweredByContainer={false}
      styles={styles.search}
    />
  );
}

export default MapInput;

const styles = StyleSheet.create({
  search: {
    width: "100%",
    height: "100%",
  },
});
