import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import action from "../../assets/icons/action-icon.png";
import strategy from "../../assets/icons/strategy-icon.png";

const Sidebar = () => {
  return (
    <Box p="9">
      <Container>
        <Text fontSize="3xl" fontWeight="600">
          <Link>Home</Link>
        </Text>
        <Text fontSize="3xl" fontWeight="600">
          Genres
        </Text>
        <List>
          <ListItem mb="1">
            <Flex>
              <Image
                boxSize="30px"
                objectFit="cover"
                src={action}
                alt="Dan Abramov"
                mr="2"
              />
              <Text>Action</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex>
              <Image
                boxSize="30px"
                objectFit="cover"
                src={strategy}
                alt="Dan Abramov"
                mr="2"
              />
              <Text>Strategy</Text>
            </Flex>
          </ListItem>
          <ListItem>
            <ListIcon />
            RPG
          </ListItem>
          <ListItem>
            <ListIcon />
            Shooter
          </ListItem>
          <ListItem>
            <ListIcon />
            Adventure
          </ListItem>
          <ListItem>
            <ListIcon />
            Puzzle
          </ListItem>
          <ListItem>
            <ListIcon />
            Racing
          </ListItem>
          <ListItem>
            <ListIcon />
            Sports
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Sidebar;
