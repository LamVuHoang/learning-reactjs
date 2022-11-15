import { useCallback, useState } from "react";
import axios from "axios";

export default function useFetchData() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (requestConfig, handleDataFn) => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: requestConfig.method,
        url: requestConfig.url,
        data: JSON.stringify(requestConfig.data),
      });

      if (response.status !== 200 && response.status !== 201) {
        throw new Error("Request failed!");
      }

      const data = await response.data;
      handleDataFn(data);
    } catch (errors) {
      setError(errors.message || "Something went wrong!");
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    fetchData,
  };
}
