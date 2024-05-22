import { Colors } from "../../constants/Colors";
import React from "react";
import * as WebBrowser from "expo-web-browser";

import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
      }}
    >
      <Image
        style={styles.logoImage}
        source={require("../../assets/images/tesla.png")}
      />
      <Image
        style={styles.bgImage}
        source={require("../../assets/images/super-car.png")}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>
          Tesla는 전기차, 태양광과 가정용 및 기업용 통합 에너지 솔루션을 통해
          지속 가능한 에너지로의 전 세계적 전환을 가속화하고 있습니다.
        </Text>
        <Text
          onPress={() => Linking.openURL("https://www.tesla.com/ko_kr/model3")}
          style={styles.desc}
        >
          Model 3
        </Text>
        <Text
          onPress={() => Linking.openURL("https://www.tesla.com/ko_kr/models")}
          style={styles.desc}
        >
          Model S
        </Text>
        <Text
          onPress={() => Linking.openURL("https://www.tesla.com/ko_kr/drive")}
          style={styles.desc}
        >
          시승신청
        </Text>
        {/* //버튼동작 */}
        <TouchableOpacity onPress={onPress} style={styles.button}>
          구글 로그인
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
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
  heading: {
    fontSize: 18,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginTop: 20,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    color: Colors.gray,
  },
  button: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 16,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 30,
  },
});
