import React, {useState} from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width * 0.7;

const AuthenticateScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
                <TextInput
                  placeholder="Password"
                  onChangeText={setPassword}
                  style={styles.input}
                  value={password}
                  placeholderTextColor="white"
                />
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
  },
  imgContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    width: width,
    resizeMode: 'contain',
  },
  form: {
    flex: 3,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    paddingLeft: '10%',
    margin: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default AuthenticateScreen;
