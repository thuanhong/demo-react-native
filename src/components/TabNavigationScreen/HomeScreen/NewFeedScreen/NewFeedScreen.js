import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import CardComponent from './CardComponent';

const DATA = require('../../../../../assets/MOCK_DATA.json');

const NewFeedScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return <CardComponent key={item.id} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default NewFeedScreen;
