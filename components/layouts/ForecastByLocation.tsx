import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

import { useFetchForecastData } from "@/hooks/useFetchForecastData";

export function ForecastByLocation({ item }: any) {
  const { forecastData } = useFetchForecastData({
    location: item.url,
  });

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>City</Text>
        <Text style={styles.text}>Region</Text>
        <Text style={styles.text}>Country</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          borderTopWidth: 1,
          borderColor: Colors.white,
        }}
      >
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.region}</Text>
        <Text style={styles.text}>{item.country}</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.text}>{forecastData?.current?.temp_c}</Text>
        <Text style={styles.text}>{forecastData?.current?.condition.text}</Text>
        <Image
          style={{ width: 50, height: 50, resizeMode: "cover" }}
          src={`https:${forecastData?.current?.condition?.icon}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 15,
    padding: 12,
    marginBottom: 7,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: Colors.white,
    maxWidth: 100,
    overflow: "visible",
  },
});
