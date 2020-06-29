import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { inject, observer } from "mobx-react";
import ActivityLogItem from "../components/ActivityLogItem";
import HeaderLeft from "../components/HeaderLeft";

const ActivityLogScreen = (props) => {
  const { log } = props.store;
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
};

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

export default inject("store")(observer(ActivityLogScreen));
