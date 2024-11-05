import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, Pressable } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export function SettingsComponent() {
  const [theme, setTheme] = useState(true);

  return (
    <View>
      <Text style={styles.title}> Settings </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingTop: 40,
        }}
      >
        <Text style={{ fontSize: 24, color: Colors.white }}>
          {theme ? "Change to Light Theme" : "Change to Dark Theme"}
        </Text>
        <Pressable onPress={() => setTheme(!theme)}>
          {theme ? (
            <MaterialCommunityIcons
              name="toggle-switch"
              size={24}
              color={Colors.white}
            />
          ) : (
            <MaterialCommunityIcons
              name="toggle-switch-off-outline"
              size={24}
              color={Colors.gray}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 50,
    fontWeight: "500",
    alignSelf: "center",
    paddingTop: 40,
  },
});
