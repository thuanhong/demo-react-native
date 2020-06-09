import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import CardComment from './CardComment';
import InputCommentComponent from './InputCommentComponent';

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
      <InputCommentComponent item={route.params.item} />
    </SafeAreaView>
  );
};

export default CommentScreen;
