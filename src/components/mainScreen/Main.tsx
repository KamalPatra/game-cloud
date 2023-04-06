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
  return (
    <Box w="100%">
      <Heading size="4xl" mb="2">
        New and trending
      </Heading>
      <Text mb="7">Based on player counts and release date</Text>
      <Flex></Flex>
    </Box>
  );
};

export default Main;
