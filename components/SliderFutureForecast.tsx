import { FlatList, View, Text, StyleSheet } from "react-native";

import { DataByHour } from "./layouts/DataByHour";
import { useFetchFutureData } from "@/hooks/useFetchFutureData";

export function SliderFutureForecast() {
  const { futureData } = useFetchFutureData({ location: "Montevideo" });
  const hourData = futureData?.forecast?.forecastday[0]?.hour;

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <FlatList
        contentContainerStyle={styles.container}
        data={hourData}
        renderItem={({ item }: any) => <DataByHour time={item} />}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 20,
  },
});
