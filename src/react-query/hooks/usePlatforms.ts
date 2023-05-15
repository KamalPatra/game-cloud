import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import platforms from "../../data/platform";
import ms from "ms";
import { Platform } from "../../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24hr"), //24Hrs,
    initialData: platforms,
  });
};

export default usePlatforms;
