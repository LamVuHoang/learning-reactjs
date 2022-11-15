import { useEffect, useCallback, useState } from "react";
import axios from "axios";

export default function useFetchData(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);

      if (response.code !== 200) {
        setError(response.message);
      }

      setData(response.data);
    } catch (errors) {
      setError(errors);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return isLoading ? "Loading..." : error ? error.message : data.name;
}
