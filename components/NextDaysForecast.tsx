import React from "react";
import { Text, View } from "react-native";
import { getNextDays } from "@/helpers/getNextDays";

import { useFetchForecastData } from "@/hooks/useFetchForecastData";

export function NextDaysForecast() {
  const dayToday = new Date().getDay();

  const { forecastData } = useFetchForecastData({
    location: "Montevideo",
    days: "7",
  });

  const nextDays = getNextDays(dayToday, 7);

  return (
    <View>
      <Text> Next Days of the Week </Text>
      {nextDays.map((day, i) => {
        const dateForecast =
          forecastData?.forecast?.forecastday[i]?.date?.split("-");

        const valueDay = dateForecast && parseInt(dateForecast[2]);
        const forecast = forecastData?.forecast?.forecastday[i]?.day?.avgtemp_c;

        return (
          <Text key={i}>
            {day} {dateForecast && valueDay + " /"}{" "}
            {forecast && forecast + " °"}
          </Text>
        );
      })}
    </View>
  );
}
