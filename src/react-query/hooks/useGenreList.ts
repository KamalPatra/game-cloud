import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import genre from "../../data/genre";
import ms from "ms";
import { Genre } from "../../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenreList = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24hr"), //24Hrs
    initialData: genre,
  });
};

export default useGenreList;
