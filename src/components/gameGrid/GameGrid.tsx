import { Text } from "@chakra-ui/react";
import useGameList from "../../hooks/useGameList";

const GameGrid = () => {
  const { games, error } = useGameList();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
