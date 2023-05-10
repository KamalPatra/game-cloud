import { Box, Button, HStack } from "@chakra-ui/react";
import { IoGameControllerOutline } from "react-icons/io5";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import SearchInput from "../searchInput/SearchInput";

const Navbar = () => {
  return (
    <HStack justifyContent="space-around" p="4">
      <Button
        fontSize="lg"
        leftIcon={<IoGameControllerOutline size={30} />}
        variant="link"
      ></Button>
      <SearchInput />
      <Box>
        <DarkModeToggle />
      </Box>
    </HStack>
  );
};

export default Navbar;
