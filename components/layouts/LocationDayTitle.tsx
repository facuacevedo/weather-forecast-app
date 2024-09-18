import React from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  day: string;
}

export function LocationDayTitle({ title, day }: Props) {
  return (
    <View>
      <Text>{title} </Text>
      <Text>{day} </Text>
    </View>
  );
}
