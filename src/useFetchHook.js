import React, { useEffect, useState } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await fetch(api);
        let data = await result.json();
        console.log("data", data);
        setData(data);
      } catch (erorr) {
        console.log("erro occured", error.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    setError(false);
    setTimeout(() => fetchData(), 5000);
  }, []);

  return [data, isLoading, error];
};

export default useFetch;
