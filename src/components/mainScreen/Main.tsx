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
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="blue"
            rightIcon={<BsChevronDown />}
          >
            Platform
          </MenuButton>
          <MenuList minWidth="240px" color="black">
            <MenuOptionGroup defaultValue="Platform">
              <MenuItemOption value="Platform">Platform</MenuItemOption>
              <MenuItemOption value="Clear">Clear</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup type="radio">
              <MenuItemOption value="PC">PC</MenuItemOption>
              <MenuItemOption value="PlayStation">PlayStation</MenuItemOption>
              <MenuItemOption value="Xbox">Xbox</MenuItemOption>
              <MenuItemOption value="iOS">iOS</MenuItemOption>
              <MenuItemOption value="Android">Android</MenuItemOption>
              <MenuItemOption value="Apple Macintosh">
                Apple Macintosh
              </MenuItemOption>
              <MenuItemOption value="Linux">Linux</MenuItemOption>
              <MenuItemOption value="Nintendo">Nintendo</MenuItemOption>
              <MenuItemOption value="Web">Web</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
      <GameCard />
    </Box>
  );
};

export default Main;
