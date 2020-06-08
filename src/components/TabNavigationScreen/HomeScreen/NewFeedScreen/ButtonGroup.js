import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ButtonGroup = ({comment}) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.cardBtn}>
      <TouchableWithoutFeedback
        onPress={() => {
          setLikeStatus(!likeStatus);
        }}>
        <View style={styles.btnStyle}>
          <AntDesign
            name="like2"
            size={22}
            color={likeStatus ? '#2173F7' : '#5F6870'}
          />
          <Text
            style={[
              styles.textBtn,
              likeStatus ? styles.active : styles.inactive,
            ]}>
            Like
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('Comment', {
            comment: comment,
          })
        }>
        <View style={[styles.btnStyle, styles.inactive]}>
          <MaterialCommunityIcons
            name="comment-outline"
            size={22}
            color="#5F6870"
          />
          <Text style={[styles.textBtn, styles.inactive]}>Comment</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.btnStyle}>
          <MaterialCommunityIcons name="share" size={22} color="#5F6870" />
          <Text style={[styles.textBtn, styles.inactive]}>Share</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  cardBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: '#c8d1da',
  },
  textBtn: {
    fontSize: 20,
    marginLeft: 5,
  },
  btnStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  active: {
    color: '#2173F7',
  },
  inactive: {
    color: '#5F6870',
  },
});

export default ButtonGroup;
