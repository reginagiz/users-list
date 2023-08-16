import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

export default function useRequest<T>(url: string, login: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (login.trim() !== "") {
      (async function () {
        try {
          setLoading(true);
          const response = await axios.get(url);
          setData(response.data);
        } catch (err) {
          if (err instanceof AxiosError) {
            setError(err as AxiosError);
          } else {
            console.error("An unknown error occurred:", err);
          }
        } finally {
          setLoading(false);
        }
      })();
    } else {
      setData(null);
      setLoading(false);
    }
  }, [url, login]);

  return { data, error, loading };
}
