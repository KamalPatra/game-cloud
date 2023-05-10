import { Box, Container, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/gameGrid/GameGrid";
import GameHeading from "./components/gameHeading/GameHeading";
import GenreList from "./components/genreList/GenreList";
import Navbar from "./components/navBar/Navbar";
import PlatformSelector from "./components/platformSelector/PlatformSelector";
import SortSelector from "./components/sortSelector/SortSelector";

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            <GenreList />
          </Container>
        </GridItem>
      </Show>
      <GridItem area={`main`}>
        <Box marginLeft={3} marginBottom={5}>
          <GameHeading />
        </Box>
        <Box marginLeft={3} marginBottom={5}>
          <SortSelector />
          <PlatformSelector />
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
