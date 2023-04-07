import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenreList = () => ({ data: genre, isLoading: false, error: null });

export default useGenreList;
