import { useEffect, useState } from "react";
import { API_KEY } from "@/constants/apiKey";

interface Props {
  location: string;
}

export function useFetchLocationData({ location }: Props) {
  const [locationData, setLocationData] = useState<string | any>(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [errorLocation, setErrorLocation] = useState<string | null>(null);

  const locationEndpoint = (params: any) =>
    `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${params.location}`;

  useEffect(() => {
    const fetchLocationData = async (urlApi: string) => {
      try {
        const response = await fetch(`${urlApi}`);
        const data = await response.json();
        setLocationData(data);
        setLoadingLocation(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching weather data:", error.message);
          setErrorLocation(error.message);
        } else {
          console.error("Unknown error occurred");
          setErrorLocation("An unknown error occurred");
        }
        setLoadingLocation(false);
      }
    };

    const fetchLocationEndpoint = ({ location }: Props) => {
      let forecastUrl = locationEndpoint({ location });

      return fetchLocationData(forecastUrl);
    };
    fetchLocationEndpoint({ location });
  }, [location]);

  return {
    locationData,
    loadingLocation,
    setLoadingLocation,
    errorLocation,
  };
}
