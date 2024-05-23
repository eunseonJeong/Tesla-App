import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";

export default function Header() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 45, height: 25, borderRadius: 99 }}
      />
      <Image
        source={require("../../assets/images/tesla.png")}
        style={{ width: 250, height: 45, objectFit: "contain" }}
      />
      <Feather name="align-right" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white_transp,
  },
});
