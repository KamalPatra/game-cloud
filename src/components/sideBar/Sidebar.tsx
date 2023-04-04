import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import action from "../../assets/icons/action-icon.png";
import strategy from "../../assets/icons/strategy-icon.png";
import GenreList from "../genreList/GenreList";

const Sidebar = () => {
  return (
    <Box>
      <Container paddingTop={8} paddingLeft={8}>
        <Heading fontSize="3xl" marginY={1}>
          <Link>Home</Link>
        </Heading>
        <GenreList></GenreList>
      </Container>
    </Box>
  );
};

export default Sidebar;
