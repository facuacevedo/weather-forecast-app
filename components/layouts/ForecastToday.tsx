import React from "react";
import { Text, View, Image } from "react-native";

export function ForecastToday({ forecastData }: any) {
  return (
    <View>
      <Text>Temp: {forecastData?.current.temp_c}°</Text>
      <Text>Wind: {forecastData?.current.wind_kph} km/h</Text>
      <Text>Humidity: {forecastData?.current.humidity}%</Text>
      <Image
        style={{ width: 100, height: 100 }}
        src={`https:${forecastData?.current?.condition.icon}`}
      />
    </View>
  );
}
