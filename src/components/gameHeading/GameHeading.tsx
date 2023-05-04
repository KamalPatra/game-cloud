import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenreList from "../../react-query/hooks/useGenreList";
import usePlatforms from "../../react-query/hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenreList();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${platform?.name || "New and Trending"} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading size="4xl" mb="2">
      {heading}
    </Heading>
  );
};

export default GameHeading;
