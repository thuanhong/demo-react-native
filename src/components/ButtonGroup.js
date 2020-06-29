import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {inject, observer} from 'mobx-react';

const ButtonGroup = props => {
  const [likeStatus, setLikeStatus] = useState(false);
  const navigation = useNavigation();
  const {item} = props;

  const {updateLog, removeSpecifyLogItem} = props.store;
  return (
    <View style={styles.cardBtn}>
      <TouchableWithoutFeedback
        onPress={() => {
          if (likeStatus) {
            removeSpecifyLogItem(item.id);
          } else {
            updateLog({
              id: item.id,
              title: item.title,
              sub_title: item.sub_title,
              status: 'likes',
            });
          }
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
            comment: item.comment,
            item: {
              id: item.id,
              title: item.title,
              sub_title: item.sub_title,
              status: 'commented',
            },
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

export default inject('store')(observer(ButtonGroup));
