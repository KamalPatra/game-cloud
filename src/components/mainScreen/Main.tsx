import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import GameCard from "../gameCard/GameCard";
import GameGrid from "../gameGrid/GameGrid";

const Main = () => {
  const [order, setOrder] = useState("Relevance");
  return (
    <Box w="100%">
      <Heading size="4xl" mb="2">
        New and trending
      </Heading>
      <Text mb="7">Based on player counts and release date</Text>
      <Flex>
        <Menu>
          <MenuButton
            colorScheme="blue"
            as={Button}
            rightIcon={<BsChevronDown />}
            mb="7"
            mr="2"
          >
            Order by: {order}
          </MenuButton>
          <MenuList>
            <MenuOptionGroup defaultValue="Relevance" type="radio">
              <MenuItemOption value="Relevance" color="black">
                Relevance
              </MenuItemOption>
              <MenuItemOption value="Date added" color="black">
                Date added
              </MenuItemOption>
              <MenuItemOption value="Name" color="black">
                Name
              </MenuItemOption>
              <MenuItemOption value="Release date" color="black">
                Release date
              </MenuItemOption>
              <MenuItemOption value="Popularity" color="black">
                Popularity
              </MenuItemOption>
              <MenuItemOption value="Average rating" color="black">
                Average rating
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Main;
