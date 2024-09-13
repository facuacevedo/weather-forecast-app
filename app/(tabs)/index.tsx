import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FetchData } from "@/components/FetchData";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", width: "100%", height: "100%" }}
    >
      <Text>Index component</Text>
      <FetchData location="Montevideo" days={"1"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
