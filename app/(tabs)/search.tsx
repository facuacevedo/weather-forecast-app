import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearcherForecastByLocation } from "@/components/SearcherForecastByLocation";
import { LinearGradient } from "expo-linear-gradient";

export default function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#020024", "#090979", "#00ffc4"]}
        start={{ x: 0.4, y: 0.8 }}
        end={{ x: 0.7, y: -0.1 }}
        style={{
          width: "100%",
          height: "100%",
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
