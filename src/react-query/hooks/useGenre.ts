import useGenreList from "./useGenreList";

const useGenre = (id?: number) => {
  const { data } = useGenreList();
  return data?.results.find((g) => g.id === id);
};

export default useGenre;
