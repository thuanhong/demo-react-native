import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import ButtonGroup from './ButtonGroup';

const {width} = Dimensions.get('window');

const CardComponent = props => {
  const {item} = props;
  return (
    <View style={styles.cardComponentStyle}>
      <View style={styles.listTile}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../../../assets/react-native-logo.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTilte}>{item.sub_title}</Text>
        </View>
      </View>
      <View>
        <Text numberOfLines={5} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          purus facilisis, ornare mi non, ullamcorper sem. Vivamus mauris justo,
          volutpat in imperdiet non, iaculis eget ligula. Cras maximus suscipit
          vestibulum. Sed luctus libero quis ante condimentum, et dignissim
          metus efficitur. Integer eu est eros. In tristique ultricies mauris.
          Aenean libero ligula, ultrices vitae facilisis efficitur, lacinia et
          odio. Sed euismod mollis orci, sed mattis tortor vulputate facilisis.
          Praesent elit orci, viverra eu metus vel, eleifend blandit arcu. Fusce
          commodo laoreet lobortis.
        </Text>
      </View>
      <View style={styles.cardContent}>
        <Image
          style={{
            width: width,
          }}
          source={require('../../../../../assets/im.jpg')}
        />
      </View>
      <View
        style={{
          borderBottomColor: '#DADDE1',
          borderBottomWidth: 1,
        }}
      />

      <ButtonGroup comment={item.comment} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  imgContainer: {
    flex: 1,
  },
  cardContent: {
    marginVertical: 20,
  },
  cardComponentStyle: {
    borderRadius: 7,
    marginVertical: 15,
    backgroundColor: 'white',
  },
  listTile: {
    flexDirection: 'row',
    height: 60,
    margin: 20,
  },
  description: {
    flex: 4,
    fontSize: 20,
    marginHorizontal: 15,
  },
  cardBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: '#c8d1da',
  },
  title: {
    fontSize: 23,
  },
  subTitle: {
    fontSize: 17,
  },
});

export default CardComponent;
