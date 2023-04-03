import { SimpleGrid, Text } from "@chakra-ui/react";
import useGameList from "../../hooks/useGameList";
import GameCard from "../gameCard/GameCard";
import GameCardSkeleton from "../gameCardSkeleton/GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGameList();
  const gameSkeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
        {isLoading &&
          gameSkeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
