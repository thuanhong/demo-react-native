import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import ActivityLogItem from "../components/ActivityLogItem";
import HeaderLeft from "../components/HeaderLeft";
import {useStores} from '../hooks/useStores';

const ActivityLogScreen = observer(() => {
  // const { log } = props.store;
  const { log } = useStores().activityStore;
  return (
    <SafeAreaView>
      <View style={styles.headerStyle}>
        <HeaderLeft />
        <Text style={styles.text}>Activity Log</Text>
      </View>
      <FlatList
        data={log.slice()}
        keyExtractor={(item) => item.id}
        extraData={log}
        renderItem={({ item }) => {
          return <ActivityLogItem id={item.id} item={item} />;
        }}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    flexDirection: "row",
    position: "absolute",
    zIndex: 99,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  text: {
    fontSize: 20,
    color: "black",
    padding: 10,
    flex: 1,
  },
});

export default ActivityLogScreen;
