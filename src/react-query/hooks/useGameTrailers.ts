import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../../entities/Trailert";
import APIClient from "../../services/api-client";

const useGameTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailers;