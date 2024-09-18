import React from "react";
import { View } from "react-native";

import { LocationDayTitle } from "./layouts/LocationDayTitle";
import { ForecastToday } from "./layouts/ForecastToday";

export function Main({ forecastData }: any) {
  return (
    <View>
      <LocationDayTitle
        title={forecastData?.location?.name}
        day={forecastData?.location?.localtime}
      />
      <ForecastToday forecastData={forecastData} />
    </View>
  );
}
