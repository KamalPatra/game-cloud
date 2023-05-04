import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenre from "../../react-query/hooks/useGenre";
import usePlatform from "../../react-query/hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

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
