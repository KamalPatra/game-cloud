import {
  FormLabel,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { WiDaySunny, WiNightClear } from "react-icons/wi";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" ? (
        <WiNightClear size="30" />
      ) : (
        <WiDaySunny size="30" />
      )}
    </HStack>
  );
};

export default DarkModeToggle;
