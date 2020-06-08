import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

const CardComment = ({name, comment}) => {
  return (
    <View style={styles.comment}>
      <Image
        style={styles.commentatorImg}
        source={require('../../../../../assets/avartar.png')}
      />
      <View style={styles.commentContent}>
        <Text style={styles.commentatorName}>{name}</Text>
        <Text>{comment}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => {}}>
          <Text>Like</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}}>
          <Text>Reply</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    margin: 20,
    flexDirection: 'row',
  },
  commentatorImg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 50,
    marginRight: 10,
  },
  commentatorName: {
    fontSize: 18,
  },
  commentContent: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 20,
  },
});

export default CardComment;
