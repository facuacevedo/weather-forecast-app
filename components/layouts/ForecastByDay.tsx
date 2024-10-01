import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import convertMonth from "@/helpers/convertMonth";

export function ForecastByDay({ day, forecastTime, date, forecastIcon }: any) {
  const currentMonth = convertMonth(date);

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            paddingLeft: 25,
            fontSize: 20,
            color: Colors.white,
            width: 150,
          }}
        >
          {day}
        </Text>
        {currentMonth && (
          <Text style={{ paddingLeft: 25, fontSize: 14, color: Colors.gray }}>
            {currentMonth}
          </Text>
        )}
      </View>
      {forecastTime && (
        <Text
          style={{
            paddingLeft: 25,
            fontSize: 30,
            color: Colors.white,
            flex: 1,
          }}
        >
          {forecastTime} °
        </Text>
      )}
      {forecastIcon && (
        <Image
          style={{ width: 50, height: 50, resizeMode: "cover" }}
          src={`https:${forecastIcon}`}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 15,
    padding: 12,
    marginBottom: 7,
    alignItems: "center",
  },
});
