import { Stack } from "expo-router";
import { SafeAreaView, ScrollView, View, StatusBar } from "react-native";

const Layout = () => {
  return (
    <Stack initialRouteName="home">
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
