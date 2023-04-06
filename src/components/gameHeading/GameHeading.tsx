import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || "New and Trending"} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading size="4xl" mb="2">
      {heading}
    </Heading>
  );
};

export default GameHeading;
