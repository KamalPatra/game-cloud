import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "../../services/api-client";
import platforms from "../../data/platform";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24Hrs,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;