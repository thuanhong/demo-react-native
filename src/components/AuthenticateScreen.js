import React, {useState, useContext} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
  Text,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../App';

const width = Dimensions.get('window').width;

const AuthenticateScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.imgBackground}>
        <TouchableWithoutFeedback behavior={Platform.OS ? 'padding' : 'height'}>
          <View style={styles.inner}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../../assets/react-native-logo.png')}
                style={styles.logo}
              />
            </View>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Username"
                  onChangeText={setUsername}
                  style={styles.input}
                  value={username}
                  placeholderTextColor="white"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Password"
                  onChangeText={setPassword}
                  style={styles.input}
                  value={password}
                  secureTextEntry='true'
                  placeholderTextColor="white"
                  place
                />
              </View>
            </View>
            <View style={styles.buttonLogin}>
              <TouchableOpacity
                style={styles.navigateBtn}
                onPress={() => signIn({username, password})}>
                <Text style={styles.btnTextStyle}>Login</Text>
              </TouchableOpacity>
              <View style={styles.btnGroupAuth}>
                <TouchableOpacity style={styles.btnGroupAuth__btn}>
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
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.7,
    resizeMode: 'contain',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    paddingVertical: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    marginVertical: 20,
    fontSize: 20,
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  buttonLogin: {
    flex: 1,
  },
  navigateBtn: {
    backgroundColor: '#F40054',
    padding: 15,
    borderRadius: 30,
  },
  btnTextStyle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  btnGroupAuth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btnGroupAuth__btn: {
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
    padding: 12,
    flex: 3,
    alignItems: 'center',
  },
  space: {
    flex: 1,
  },
});

export default AuthenticateScreen;
