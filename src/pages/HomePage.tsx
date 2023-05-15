import { Box, Grid, GridItem, Show, Container, HStack } from "@chakra-ui/react";
import GameGrid from "../components/gameGrid/GameGrid";
import GameHeading from "../components/gameHeading/GameHeading";
import GenreList from "../components/genreList/GenreList";
import Navbar from "../components/navBar/Navbar";
import PlatformSelector from "../components/platformSelector/PlatformSelector";
import SortSelector from "../components/sortSelector/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
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
        <HStack marginLeft={3} marginBottom={5} flexWrap="wrap">
          <SortSelector />
          <PlatformSelector />
        </HStack>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
