import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/gameGrid/GameGrid";
import Main from "./components/mainScreen/Main";
import Navbar from "./components/navBar/Navbar";
import Sidebar from "./components/sideBar/Sidebar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area={`nav`}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={`sidebar`}>
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area={`main`}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
