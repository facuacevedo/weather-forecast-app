import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

import convertDate from "@/helpers/convertMonth";

interface Props {
  title: string;
  day: string;
}

export function LocationDayTitle({ title, day }: Props) {
  const monthConverted = convertDate(day);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <Text style={styles.subTitle}>{monthConverted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: Colors.white,
  },
  subTitle: {
    fontSize: 24,
    color: Colors.gray,
  },
});
