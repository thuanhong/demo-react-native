import React, {useEffect} from "react";
import { StyleSheet, View , Text} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import SquareRotate from "./Animations/SquareRotate";

const SplashScreen = () => {
  const navigation = useNavigation();
  // navigation.replace('Auth')
  useEffect(() => {
    setTimeout(() => navigation.replace('Auth'), 5000)
  }, [])
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.linearGradient}
    >
      <SquareRotate />
      <View style={{flex: 0.3, alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: 'white'}}>Loading ...</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default SplashScreen;
