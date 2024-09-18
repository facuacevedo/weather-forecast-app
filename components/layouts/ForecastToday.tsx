import React from "react";
import { Text, View, Image } from "react-native";

export function ForecastToday({ forecastData }: any) {
  return (
    <View>
      <Text>Condition Time: {forecastData?.current?.condition.text}</Text>
      <Text>Temp: {forecastData?.current?.temp_c}°</Text>
      <Text>Humidity: {forecastData?.current?.humidity}%</Text>
      <Text>Wind: {forecastData?.current?.wind_kph} km/h</Text>
      <Image
        style={{ width: 100, height: 100 }}
        src={`https:${forecastData?.current?.condition.icon}`}
      />
    </View>
  );
}
