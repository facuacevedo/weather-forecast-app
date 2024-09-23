import React from "react";
import { View, StyleSheet } from "react-native";

export function Main({ children }: any) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    justifyContent: "space-between",
  },
});
