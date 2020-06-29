import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ActivityLogItem = props => {
  const {item} = props;
  return (
    <View style={styles.item}>
      <Image
        style={styles.img}
        source={require('../../assets/avartar.png')}
      />
      <View style={{width: '80%'}}>
        <Text numberOfLines={3} style={styles.content}>
          You {item.status} {item.title} post in {item.sub_title}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.linkPostStyle}>See post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 50,
    marginRight: 10,
  },
  content: {
    fontSize: 17,
  },
  linkPostStyle: {
    color: '#017AFB',
    fontWeight: 'bold',
  },
});

export default ActivityLogItem;
