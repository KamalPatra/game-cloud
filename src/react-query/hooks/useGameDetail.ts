import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import { Game } from "./useGameList";

const apiClient = new APIClient<Game>("/games");
const useGameDetail = (slug: string) => {
  return useQuery({
    queryKey: ["details", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGameDetail;