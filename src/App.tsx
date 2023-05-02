import { Box, Container, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/gameGrid/GameGrid";
import GameHeading from "./components/gameHeading/GameHeading";
import GenreList from "./components/genreList/GenreList";
import Navbar from "./components/navBar/Navbar";
import PlatformSelector from "./components/platformSelector/PlatformSelector";
import SortSelector from "./components/sortSelector/SortSelector";
import { Genre } from "./react-query/hooks/useGenreList";
import { Platform } from "./react-query/hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
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
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
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
          <GameHeading gameQuery={gameQuery} />
        </Box>
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
