import { Box, HStack } from "@chakra-ui/react";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import SearchInput from "../searchInput/SearchInput";

const Navbar = () => {
  return (
    <HStack justifyContent="space-around" p="4">
      <Link to="/">
        <IoGameControllerOutline size={30} />
      </Link>
      <SearchInput />
      <Box>
        <DarkModeToggle />
      </Box>
    </HStack>
  );
};

export default Navbar;
