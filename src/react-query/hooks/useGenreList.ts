import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "../../services/api-client";
import genre from "../../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenreList = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient.get<FetchData<Genre>>("/genres").then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000, //24Hrs
    initialData: { count: genre.length, results: genre },
  });
};

export default useGenreList;
