import { Heading } from "@chakra-ui/react";
import useGenre from "../../react-query/hooks/useGenre";
import usePlatform from "../../react-query/hooks/usePlatform";
import useGameQueryStore from "../../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || "New and Trending"} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading size={["lg", "4xl"]} mb="2">
      {heading}
    </Heading>
  );
};

export default GameHeading;
