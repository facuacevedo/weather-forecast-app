import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export function DataByHour({ time }: any) {
  const hourExtractor = (day: any) => {
    let { time } = day;

    time = time.split(" ").reverse();
    return time[0];
  };
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 90, height: 90, resizeMode: "cover" }}
        src={`https:${time.condition.icon}`}
      />
      <View>
        <Text style={[styles.text, { fontSize: 16 }]}>
          {hourExtractor(time)}
        </Text>
        <Text style={[styles.text, { fontSize: 22, fontWeight: "700" }]}>
          {time.temp_c}°
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "auto",
    padding: 15,
    borderRadius: 35,
    borderWidth: 1,
    backgroundColor: Colors.blue,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  text: {
    color: Colors.white,
  },
});
