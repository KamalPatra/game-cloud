import { SimpleGrid, Text } from "@chakra-ui/react";
import useGameList, { Platform } from "../../hooks/useGameList";
import { Genre } from "../../hooks/useGenreList";
import GameCard from "../gameCard/GameCard";
import GameCardContainer from "../gameCardContainer/GameCardContainer";
import GameCardSkeleton from "../gameCardSkeleton/GameCardSkeleton";

interface Props {
  genre: Genre | null;
  platform: Platform | null;
}
const GameGrid = ({ genre, platform }: Props) => {
  const { data, error, isLoading } = useGameList(genre, platform);
  const gameSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          gameSkeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
