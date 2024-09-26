import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";

import { useFetchForecastData } from "@/hooks/useFetchForecastData";

import { Main } from "@/components/layouts/Main";
import { LocationDayTitle } from "@/components/layouts/LocationDayTitle";
import { ForecastToday } from "@/components/layouts/ForecastToday";
import { SliderFutureForecast } from "@/components/SliderFutureForecast";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const { forecastData } = useFetchForecastData({
    location: "Buenos Aires",
    days: "1",
  });

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
        <Main>
          <LocationDayTitle
            title={forecastData?.location?.name}
            day={forecastData?.location?.localtime}
          />
          <ForecastToday forecastData={forecastData} />
        </Main>
        <Text style={{ paddingLeft: 25, fontSize: 24, color: Colors.white }}>
          Today
        </Text>
        <SliderFutureForecast />
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
