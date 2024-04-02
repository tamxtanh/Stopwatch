import { SafeAreaView, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import StopWatch from "../component/Stopwatch";
import Constants from "expo-constants";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StopWatch />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: Constants.statusBarHeight,
  },
});

export default Home;
