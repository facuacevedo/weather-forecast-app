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
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ForecastByLocation } from "./layouts/ForecastByLocation";

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
      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Find your location..."
          placeholderTextColor={Colors.gray}
        />
        <Pressable onPress={toggleSearchLocation} style={styles.button}>
          <FontAwesome name="search" size={18} color={Colors.gray} />
        </Pressable>
      </View>
      <View style={styles.listLocations}>
        {location && (
          <View>
            <FlatList
              data={locationData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View>
                  <ForecastByLocation item={item} />
                </View>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
    width: "100%",
    height: "100%",
  },
  subContainer: {
    flexDirection: "row",
    width: "75%",
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 40,
  },
  listLocations: {
    width: "90%",
    padding: 10,
    alignSelf: "center",
  },
  input: {
    padding: 6,
    color: Colors.white,
    flex: 1,
  },
  button: {
    padding: 8,
  },
});
