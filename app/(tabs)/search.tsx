import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearcherForecastByLocation } from "@/components/SearcherForecastByLocation";

export default function Search() {
  return (
    <SafeAreaView>
      <Text>Search component</Text>
      <SearcherForecastByLocation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
