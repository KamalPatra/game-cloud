import { SimpleGrid, Text } from "@chakra-ui/react";
import useGameList from "../../hooks/useGameList";
import GameCard from "../gameCard/GameCard";

const GameGrid = () => {
  const { games, error } = useGameList();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding="10px">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
