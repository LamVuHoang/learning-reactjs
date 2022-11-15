import { useEffect, useState } from "react";
import useFetchData from "../../Hooks/useFetchData";
export default function Index() {
  const { isLoading, error, fetchData } = useFetchData();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const requestConfig = {
      url: "https://lamreactjs-default-rtdb.asia-southeast1.firebasedatabase.app/alpha.json",
    };
    const handleDataFn = (dataObject) => {
      const resultData = [];
      for (let key in dataObject) {
        resultData.push({ id: key, data: dataObject[key] });
      }
      setData(resultData);
    };

    fetchData(requestConfig, handleDataFn);
  }, [fetchData]);

  return (
    <>
      <div className="text-center p-10">
        {isLoading && <div>Loading...</div>}
        {error && <div className="text-red-600">{error}</div>}
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <div className="text-green-600">{item.data}</div>
              </div>
            );
          })}
        <br />
      </div>
    </>
  );
}
