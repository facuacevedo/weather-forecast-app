import { Text, View, StyleSheet } from "react-native";
import { getNextDays } from "@/helpers/getNextDays";

import { useFetchForecastData } from "@/hooks/useFetchForecastData";
import { ForecastByDay } from "./layouts/ForecastByDay";
import { Colors } from "@/constants/Colors";

import AntDesign from "@expo/vector-icons/AntDesign";

export function NextDaysForecast() {
  const dayToday = new Date().getDay();

  const { forecastData } = useFetchForecastData({
    location: "Montevideo",
    days: "7",
  });

  const nextDays = getNextDays(dayToday, 7);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}> Next forecast </Text>
        <AntDesign name="calendar" size={22} color={Colors.white} />
      </View>
      {nextDays.map((day, i) => {
        const date = forecastData?.forecast?.forecastday[i]?.date;
        const forecastTime =
          forecastData?.forecast?.forecastday[i]?.day?.avgtemp_c;
        const forecastIcon =
          forecastData?.forecast?.forecastday[i]?.day?.condition?.icon;

        if (forecastTime) {
          return (
            <ForecastByDay
              key={i}
              day={day}
              forecastTime={forecastTime}
              forecastIcon={forecastIcon}
              date={date}
            />
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
  },
});
