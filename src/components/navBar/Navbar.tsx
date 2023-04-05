import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  Text,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import { SearchIcon } from "@chakra-ui/icons";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
const Navbar = () => {
  return (
    <HStack justifyContent="space-around" p="4">
      <Button
        fontSize="lg"
        leftIcon={<IoGameControllerOutline size={30} />}
        variant="link"
      >
        GAMES
      </Button>
      <InputGroup size="lg" borderRadius="100" w="70%">
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearch size="16" />}
        />
        <Input placeholder="Search Games" fontSize="16" />
      </InputGroup>
      <Box>
        <DarkModeToggle />
      </Box>
    </HStack>
  );
};

export default Navbar;
