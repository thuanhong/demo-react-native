import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const CardComment = ({name, comment}) => {
  return (
    <View style={styles.comment}>
      <Image
        style={styles.commentatorImg}
        source={require('../../assets/avartar.png')}
      />
      <View style={styles.commentContent}>
        <Text style={styles.commentatorName}>{name}</Text>
        <Text multiline>{comment}</Text>
        <View style={styles.cardCommentBtn}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.textStyle}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.textStyle}>Reply</Text>
          </TouchableOpacity>
        </View>
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
    width: '85%',
  },
  cardCommentBtn: {
    flexDirection: 'row',
    padding: 5,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
});

export default CardComment;
