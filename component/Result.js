import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { displayTime } from "./util";

const Result = ({ results }) => {
  return (
    <ScrollView>
      <View style={styles.resultItem} />
      {results.map((item, index) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            Lap {results.length - index}:
          </Text>

          <Text style={styles.resultItemText}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    height: 50,
    paddingHorizontal: 15,
  },
  resultItemText: {
    color: "#252525",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default React.memo(Result);
