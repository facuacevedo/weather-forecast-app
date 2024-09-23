import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView>
      <Main>
        <LocationDayTitle
          title={forecastData?.location?.name}
          day={forecastData?.location?.localtime}
        />
        <ForecastToday forecastData={forecastData} />
        <SliderFutureForecast />
      </Main>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
