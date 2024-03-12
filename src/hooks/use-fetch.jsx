import {useState, useEffect} from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true);
    try {
      const response = await fetch(url, {...options});
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (err) {
      setError(`Something went wrong! ${err}`);
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {data, error, pending};
};

// const {data, error, pending} = useFetch("url", {})

export default useFetch;
