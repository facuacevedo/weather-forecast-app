import { useEffect, useState } from "react";
import { API_KEY } from "@/constants/apiKey";

interface Props {
  location: string;
  days?: string;
}

export function useFetchForecastData({ location, days }: Props) {
  const [forecastData, setForecastData] = useState<string | any>(null);
  const [loadingForecast, setLoadingForecast] = useState(true);
  const [errorForecast, setErrorForecast] = useState<string | null>(null);

  const forecastEndpoint = (params: Props) =>
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params.location}&days=${params.days}&aqi=no&alerts=no`;

  useEffect(() => {
    const fetchForecastData = async (urlApi: string) => {
      try {
        const response = await fetch(`${urlApi}`);
        const data = await response.json();
        setForecastData(data);
        setLoadingForecast(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching weather data:", error.message);
          setErrorForecast(error.message);
        } else {
          console.error("Unknown error occurred");
          setErrorForecast("An unknown error occurred");
        }
        setLoadingForecast(false);
      }
    };

    const fetchForecastEndpoint = ({ location, days }: Props) => {
      let forecastUrl = forecastEndpoint({ location, days });

      return fetchForecastData(forecastUrl);
    };

    fetchForecastEndpoint({ location, days });
  }, []);

  return {
    forecastData,
    loadingForecast,
    setLoadingForecast,
    errorForecast,
  };
}
