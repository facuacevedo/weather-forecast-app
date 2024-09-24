import { Colors } from "@/constants/Colors";
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export function ForecastToday({ forecastData }: any) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 500, height: 500, resizeMode: "cover" }}
        src={`https:${forecastData?.current?.condition.icon}`}
      />
      <View style={styles.subContainer}>
        <View style={styles.centerTexts}>
          <Text style={[styles.textForecast, { color: Colors.gray }]}>
            Temp:
          </Text>
          <Text
            style={[styles.textForecast, { fontSize: 18, fontWeight: "900" }]}
          >
            {forecastData?.current.temp_c}°
          </Text>
        </View>
        <View style={styles.centerTexts}>
          <Text style={[styles.textForecast, { color: Colors.gray }]}>
            Wind:
          </Text>
          <Text
            style={[styles.textForecast, { fontSize: 18, fontWeight: "900" }]}
          >
            {forecastData?.current.wind_kph} km/h
          </Text>
        </View>
        <View style={styles.centerTexts}>
          <Text style={[styles.textForecast, { color: Colors.gray }]}>
            Humidity:
          </Text>
          <Text
            style={[styles.textForecast, { fontSize: 18, fontWeight: "900" }]}
          >
            {forecastData?.current.humidity}%
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
  },
  subContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textForecast: {
    color: Colors.white,
  },
  centerTexts: {
    alignItems: "center",
  },
});
