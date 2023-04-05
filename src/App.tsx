import { Container, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/gameGrid/GameGrid";
import GenreList from "./components/genreList/GenreList";
import Main from "./components/mainScreen/Main";
import Navbar from "./components/navBar/Navbar";
import Sidebar from "./components/sideBar/Sidebar";
import { Genre } from "./hooks/useGenreList";

function App() {
  const [genre, setGenre] = useState<Genre | null>(null);

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
              selectedGenre={genre}
              onSelectGenre={(genre) => {
                setGenre(genre);
              }}
            />
          </Container>
        </GridItem>
      </Show>
      <GridItem area={`main`}>
        <GameGrid genre={genre} />
      </GridItem>
    </Grid>
  );
}

export default App;
