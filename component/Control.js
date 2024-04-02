import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Control = ({
  isRunning,
  handleLeftButtonPress,
  handleRightButtonPress,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.controlButtonBorder, { backgroundColor: "#e8e8e8" }]}
        onPress={handleLeftButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: "#252525", fontSize: 17, fontWeight: "500" }}>
            {isRunning ? "Lap" : "Reset"}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#ce2013" : "#595BDE" },
        ]}
        onPress={handleRightButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: "#fafafa", fontSize: 17, fontWeight: "500" }}>
            {isRunning ? "Stop" : "Start"}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const CENTER = {
  justifyContent: "center",
  alignItems: "center",
};

const styles = StyleSheet.create({
  controlButtonBorder: {
    ...CENTER,
    width: 118,
    height: 48,
    borderRadius: 30,
  },
});

export default React.memo(Control);
