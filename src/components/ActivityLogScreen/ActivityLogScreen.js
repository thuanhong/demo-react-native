import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {inject, observer} from 'mobx-react';
import ActivityLogItem from './ActivityLogItem';

const ActivityLogScreen = props => {
  const {log} = props.store;
  return (
    <SafeAreaView>
      <FlatList
        data={log.slice()}
        keyExtractor={item => item.id}
        extraData={log}
        renderItem={({item}) => {
          return <ActivityLogItem id={item.id} item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default inject('store')(observer(ActivityLogScreen));
