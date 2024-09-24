import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  day: string;
}

export function LocationDayTitle({ title, day }: Props) {
  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const convertDate = (day: string) => {
    const currentDate = day.split("-");
    const currentDay = currentDate[2].split(" ");
    let monthConverted: number = parseInt(currentDate[1]);

    return `${months[monthConverted - 1]}, ${currentDay[0]} ${currentDate[0]}`;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <Text style={styles.subTitle}>{convertDate(day)}</Text>
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
