import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import useGameList from "../../react-query/hooks/useGameList";
import GameCard from "../gameCard/GameCard";
import GameCardContainer from "../gameCardContainer/GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCardLoader from "../gameCardLoader/GameCardLoader";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGameList();

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount} //This is important field to render the next data <h4>Loading...</h4>
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={5}
          padding="10px"
        >
          <GameCardLoader />
        </SimpleGrid>
      }
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding="10px"
      >
        {isLoading && <GameCardLoader />}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
