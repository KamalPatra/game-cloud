import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGameList from "../../react-query/hooks/useGameList";
import GameCard from "../gameCard/GameCard";
import GameCardContainer from "../gameCardContainer/GameCardContainer";
import GameCardSkeleton from "../gameCardSkeleton/GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGameList(gameQuery);
  const gameSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding="10px"
    >
      {isLoading &&
        gameSkeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
