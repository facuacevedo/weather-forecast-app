import { useEffect, useState } from "react";
import { API_KEY } from "@/constants/apiKey";

interface Props {
  location: string;
}

export function useFetchFutureData({ location }: Props) {
  const [futureData, setFutureData] = useState<string | any>(null);
  const [LoadingFuture, setLoadingFuture] = useState(true);
  const [errorFuture, setErrorFuture] = useState<string | null>(null);

  const futureEndpoint = (params: Props) =>
    `https://api.weatherapi.com/v1/future.json?key=${API_KEY}&q=${params.location}&dt=2024-10-21
`;

  useEffect(() => {
    const fetchFutureData = async (urlApi: string) => {
      try {
        const response = await fetch(`${urlApi}`);
        const data = await response.json();
        setFutureData(data);
        setLoadingFuture(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching weather data:", error.message);
          setErrorFuture(error.message);
        } else {
          console.error("Unknown error occurred");
          setErrorFuture("An unknown error occurred");
        }
        setLoadingFuture(false);
      }
    };

    const fetchFutureEndpoint = ({ location }: Props) => {
      let forecastUrl = futureEndpoint({ location });

      return fetchFutureData(forecastUrl);
    };

    fetchFutureEndpoint({ location });
  }, [location]);

  return {
    futureData,
    LoadingFuture,
    setLoadingFuture,
    errorFuture,
  };
}
