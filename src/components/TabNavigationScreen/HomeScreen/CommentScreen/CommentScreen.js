import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import CardComment from './CardComment';

const CommentScreen = ({route}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={route.params.comment}
        renderItem={({item, index}) => {
          return (
            <CardComment key={index} name={item.name} comment={item.comment} />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CommentScreen;
