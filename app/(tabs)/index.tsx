import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";

import { useFetchForecastData } from "@/hooks/useFetchForecastData";

import { Main } from "@/components/layouts/Main";
import { LocationDayTitle } from "@/components/layouts/LocationDayTitle";
import { ForecastToday } from "@/components/layouts/ForecastToday";
import { SliderFutureForecast } from "@/components/SliderFutureForecast";

export default function HomeScreen() {
  const { forecastData } = useFetchForecastData({
    location: "Buenos Aires",
    days: "1",
  });

  return (
    <SafeAreaView style={styles.container}>
      <Main>
        <LocationDayTitle
          title={forecastData?.location?.name}
          day={forecastData?.location?.localtime}
        />
        <ForecastToday forecastData={forecastData} />
      </Main>
      <Text style={{ paddingLeft: 25, fontSize: 24, color: Colors.gray }}>
        Today
      </Text>
      <SliderFutureForecast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.darkBlue,
    justifyContent: "space-evenly",
  },
});
