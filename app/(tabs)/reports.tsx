import { NextDaysForecast } from "@/components/NextDaysForecast";
import { SliderFutureForecast } from "@/components/SliderFutureForecast";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Reports() {
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
        <Text style={{ paddingLeft: 25, fontSize: 24, color: Colors.white }}>
          Today
        </Text>
        <SliderFutureForecast />
        <NextDaysForecast />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
  },
});
