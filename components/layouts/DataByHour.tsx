import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export function DataByHour({ time }: any) {
  const hourExtractor = (day: any) => {
    let { time } = day;

    time = time.split(" ").reverse();
    return time[0];
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 40, height: 40 }}
        src={`https:${time.condition.icon}`}
      />
      <Text>{hourExtractor(time)}</Text>
      <Text>Temp: {time.temp_c}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: "auto",
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#e2e2e2",
    alignItems: "center",
  },
});
