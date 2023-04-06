import { Box, Container, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/gameGrid/GameGrid";
import GenreList from "./components/genreList/GenreList";
import Main from "./components/mainScreen/Main";
import Navbar from "./components/navBar/Navbar";
import PlatformSelector from "./components/platformSelector/PlatformSelector";
import Sidebar from "./components/sideBar/Sidebar";
import SortSelector from "./components/sortSelector/SortSelector";
import { Platform } from "./hooks/useGameList";
import { Genre } from "./hooks/useGenreList";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={`nav`}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={`sidebar`}>
          {/* <Sidebar /> */}
          <Container paddingTop={8} paddingLeft={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
              }}
            />
          </Container>
        </GridItem>
      </Show>
      <GridItem area={`main`}>
        <Box marginLeft={3} marginBottom={5}>
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
