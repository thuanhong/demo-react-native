import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {inject, observer} from 'mobx-react';

const InputCommentComponent = props => {
  const myTextInput = React.createRef();
  const {item} = props;
  const {updateLog} = props.store;
  return (
    <View style={styles.inputComment}>
      <TextInput
        ref={myTextInput}
        multiline
        style={styles.textInput}
        placeholder="Enter your comment"
      />
      <TouchableOpacity
        onPress={() => {
          myTextInput.current.clear();
          updateLog(item);
        }}>
        <MaterialCommunityIcons
          style={styles.sendIcon}
          name="send"
          size={25}
          color="#0369FF"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputComment: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: '7%',
    paddingHorizontal: '10%',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
  },
  textInput: {
    fontSize: 20,
  },
  sendIcon: {
    marginHorizontal: 10,
  },
});

export default inject('store')(observer(InputCommentComponent));
