import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
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
      gridTemplateColumns={`300px 1fr`}
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
        <Main />
      </GridItem>
    </Grid>
  );
}

export default App;
