import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { User } from "../types";

interface UserData {
  items: User[];
  total_count: number;
}
export default function useRequest(url: string) {
  const [data, setData] = useState<UserData | null>(null);
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
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
  }, [url]);

  return { data, error, loading };
}
