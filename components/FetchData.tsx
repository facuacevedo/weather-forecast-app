import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { API_KEY } from "../constants/apiKey";

interface Props {
  location?: string;
  days?: string;
}

export function FetchData({ location, days }: Props) {
  const [forecastData, setForecastData] = useState<string | any>(null);
  const [locationData, setLocationData] = useState<string | any>(null);
  const [futureData, setFutureData] = useState<string | any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const forecastEndpoint = (params: Props) =>
    // `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params.location}&days=${params.days}&aqi=no&alerts=no`;
    `https://api.weatherapi.com/v1/future.json?key=${API_KEY}&q=${params.location}&dt=2024-10-20`;
  const locationEndpoint = (params: Props) =>
    `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${params.location}`;
  const futureEndpoint = `https://api.weatherapi.com/v1/future.json?key=${API_KEY}&q=Buenos Aires&dt=2024-10-20`;

  useEffect(() => {
    // Information of weather forecast by location and days
    const fetchForecastData = async (urlApi: string) => {
      try {
        const response = await fetch(`${urlApi}`);
        const data = await response.json();
        setForecastData(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching weather data:", error.message);
          setError(error.message);
        } else {
          console.error("Unknown error occurred");
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };
    // Information by location or city
    const fetchLocationData = async (urlApi: string) => {
      try {
        const response = await fetch(`${urlApi}`);
        const data = await response.json();
        setLocationData(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching weather data:", error.message);
          setError(error.message);
        } else {
          console.error("Unknown error occurred");
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };
    const fetchFutureData = async (urlApi: string) => {
      try {
        const response = await fetch(`${urlApi}`);
        const data = await response.json();
        setFutureData(data);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching weather data:", error.message);
          setError(error.message);
        } else {
          console.error("Unknown error occurred");
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    const fetchForecastEndpoint = ({ location, days }: Props) => {
      let forecastUrl = forecastEndpoint({ location, days });

      return fetchForecastData(forecastUrl);
    };

    const fetchLocationEndpoint = ({ location }: Props) => {
      let forecastUrl = locationEndpoint({ location });

      return fetchLocationData(forecastUrl);
    };

    const fetchFutureEndpoint = () => {
      return fetchFutureData(futureEndpoint);
    };

    fetchForecastEndpoint({ location });
    // fetchLocationEndpoint({ location: "Buenos Aires" });
    // fetchFutureEndpoint();
  }, [location, days]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading weather data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching weather data: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* INFO OF FORECAST BY LOCATION */}
      {/* {forecastData !== null && (
        <View>
          <Text>Weather in {forecastData.location.name}</Text>
          <Text>Temperature: {forecastData.current.temp_c}°C</Text>
          <Text>Condition: {forecastData.current.condition.text}</Text>
          <Text>Wind: {forecastData.current.wind_kph} kph</Text>
          <Text>Humidity: {forecastData.current.humidity}%</Text>
        </View>
      )} */}
      {/* INFO OF LOCATION */}
      {/* <View>
        {locationData !== null &&
          locationData.map((city: any) => (
            <View key={city.id}>
              <Text>
                {city.name} from {city.country}
              </Text>
            </View>
          ))}
      </View> */}
      <Text>{forecastData?.forecast.forecastday[0].hour[0].time}</Text>
      {/* <Text>Temp: {futureData?.forecast?.forecastDay?.hour[0].temp_c}°</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
