import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearcherForecastByLocation } from "@/components/SearcherForecastByLocation";
import { LinearGradient } from "expo-linear-gradient";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#020024", "#090979", "#00ffc4"]}
        start={{ x: 0.21, y: 0.57 }}
        end={{ x: 0.7, y: -0.1 }}
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 40,
        }}
      >
        <SearcherForecastByLocation />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
