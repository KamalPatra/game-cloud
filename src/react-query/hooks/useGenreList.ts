import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import genre from "../../data/genre";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenreList = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24Hrs
    initialData: genre,
  });
};

export default useGenreList;
