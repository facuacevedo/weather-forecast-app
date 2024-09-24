import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";

import { useFetchLocationData } from "@/hooks/useFetchLocationData";

export function SearcherForecastByLocation() {
  const [location, setLocation] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const { locationData } = useFetchLocationData({
    location: searchLocation,
  });

  const toggleSearchLocation = () => {
    setSearchLocation(location);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
      />
      <Pressable onPress={toggleSearchLocation} style={styles.button}>
        <Text>Search</Text>
      </Pressable>
      {location && (
        <FlatList
          data={locationData}
          renderItem={({ item }) => <Text>{item.country}</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#a7a7a7",
  },
  button: {
    width: 60,
    height: 30,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#4f8cff",
    borderRadius: 14,
  },
});
