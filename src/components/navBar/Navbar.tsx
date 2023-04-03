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
        leftIcon={<IoGameControllerOutline size={30} />}
        variant="link"
      ></Button>
      <InputGroup size="lg" borderRadius="100" w="70%">
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearch size="16" />}
        />
        <Input placeholder="Search Games" fontSize="16" />
      </InputGroup>
      <Box>
        <Flex alignItems={"center"}>
          <Button variant={"link"} colorScheme="white" mr="5">
            LOG IN
          </Button>
          <Button variant={"link"} colorScheme="white" mr="5">
            SIGN UP
          </Button>

          <DarkModeToggle />
        </Flex>
      </Box>
    </HStack>
  );
};

export default Navbar;
