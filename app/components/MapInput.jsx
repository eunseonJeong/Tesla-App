import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

function MapInput({ searchedLocation }) {
  return (
    <GooglePlacesAutocomplete
      minLength={2}
      placeholder="장소를 검색해보세요!"
      query={{
        key: "AIzaSyCQy9x630YV2fAP_i5SaVPWp0fZDzXWnQg",
        language: "ko",
        components: "country:kr",
      }}
      keyboardShouldPersistTaps={"handled"}
      fetchDetails={true} //디테일 검색 허용
      onPress={(data, details) => {
        searchedLocation(details?.geometry?.location);
      }} //검색버튼
      onFail={(error) => console.log(error)} //실패시
      onNotFound={() => console.log("no results")}
      keepResultsAfterBlur={true} //검색 후 검색목록 지울지 결정
      enablePoweredByContainer={false} //밑에 google 표시
      styles={styles.search}
    />
  );
}

export default MapInput;
const styles = StyleSheet.create({
  search: {
    // container 감싸고 있는 컴포넌트
    container: {},
    // input을 감싸는 컴포넌트
    textInputContainer: {
      flexDirection: "row",
    },
    // input창
    textInput: {
      backgroundColor: Colors.white,
      borderRadius: 8,
      paddingVertical: 9,
      paddingHorizontal: 12,
      fontSize: 16,
      color: Colors.gray,
    },
    // 검색결과 리스트 컴포넌트
    listView: {
      backgroundColor: Colors.white,
      borderRadius: 10,
      paddingHorizontal: 10,
      elevation: 8,
      shadowColor: "#6164BB",
    },
    // 검색결과 행
    row: {
      paddingVertical: 20,
    },
    // 검색결과 divided line
    separator: {
      height: 2,
      backgroundColor: "#c8c7cc",
    },
    // 검색결과 text
    description: {
      fontSize: 15,
      fontFamily: "spoqaR",
    },
    // 필요없음
    loader: {
      flexDirection: "row",
      justifyContent: "flex-end",
      height: 20,
    },
  },
});
