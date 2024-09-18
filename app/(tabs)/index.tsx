import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFetchForecastData } from "@/hooks/useFetchForecastData";

import { Main } from "@/components/Main";

export default function HomeScreen() {
  const { forecastData } = useFetchForecastData({
    location: "Montevideo",
    days: "1",
  });

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", width: "100%", height: "100%" }}
    >
      <Text>Index component</Text>
      {/* <Text>{locationData[0].country}</Text> */}
      {/* <FetchData location="Montevideo" days={"1"} /> */}
      <Main forecastData={forecastData} />
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
