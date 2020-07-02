import React, { useState, useContext, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
  Text,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../providers/AuthContext";
import { observer, useLocalStore } from "mobx-react-lite";
import KeyBoardShift from "../components/KeyBoardShift";


const width = Dimensions.get("window").width;

const AuthenticateScreen = observer(() => {

  const { signIn } = useContext(AuthContext);

  const textInputValue = useLocalStore(() => ({
    username: '',
    password: '',
    visible: true,
    setUsername: value => {
      textInputValue.username = value
    },
    setPassword: value => {
      textInputValue.password = value
    },
    setVisible: () => {
      textInputValue.visible = !textInputValue.visible
    }
  }));

  return (
    <KeyBoardShift>
{   () =>   (<ImageBackground
        source={require("../../assets/background.png")}
        style={styles.imgBackground}
      >
        <TouchableWithoutFeedback behavior={Platform.OS ? "padding" : "height"}>
          <View style={styles.inner}>
            <View style={styles.imgContainer}>
              <Image
                source={require("../../assets/react-native-logo.png")}
                style={styles.logo}
              />
            </View>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Username"
                  onChangeText={textInputValue.setUsername}
                  style={styles.input}
                  // value={textInputValue.username}
                  placeholderTextColor="white"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Password"
                  onChangeText={textInputValue.setPassword}
                  style={styles.input}
                  // value={textInputValue.password}
                  secureTextEntry={textInputValue.visible}
                  placeholderTextColor="white"
                  place
                />
                <TouchableWithoutFeedback onPress={textInputValue.setVisible}>
                  <MaterialCommunityIcons
                    name={textInputValue.visible ? "eye-off" : "eye"}
                    size={25}
                    style={styles.visibleIcon}
                  />
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={styles.buttonLogin}>
              <TouchableOpacity
                style={styles.navigateBtn}
                onPress={() => signIn({ username: textInputValue.username, password: textInputValue.password })}
              >
                <Text style={styles.btnTextStyle}>Login</Text>
              </TouchableOpacity>
              <View style={styles.btnGroupAuth}>
                <TouchableOpacity style={styles.btnGroupAuth__btn} onPress={() => console.log(textInputValue.username, textInputValue.password)}>
                  <AntDesign name="google" size={22} color="white" />
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity style={styles.btnGroupAuth__btn}>
                  <AntDesign name="twitter" size={22} color="white" />
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity style={styles.btnGroupAuth__btn}>
                  <AntDesign name="facebook-square" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>)}
    </KeyBoardShift>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  imgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: width * 0.7,
    resizeMode: "contain",
  },
  form: {
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    paddingVertical: 15,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    marginVertical: 20,
    fontSize: 20,
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonLogin: {
    flex: 1,
  },
  navigateBtn: {
    backgroundColor: "#F40054",
    padding: 15,
    borderRadius: 30,
  },
  btnTextStyle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  btnGroupAuth: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btnGroupAuth__btn: {
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1,
    padding: 12,
    flex: 3,
    alignItems: "center",
  },
  space: {
    flex: 1,
  },
  visibleIcon: {
    position: "absolute",
    right: 0,
    bottom: 30,
  },
});

export default AuthenticateScreen;
