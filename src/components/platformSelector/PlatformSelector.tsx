import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../../hooks/useGameList";
import usePlatforms from "../../react-query/hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList minWidth="240px">
        {/* <MenuOptionGroup defaultValue="Platform">
          <MenuItemOption value="Platform">Platform</MenuItemOption>
          <MenuItemOption value="Clear">Clear</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider /> */}
        <MenuOptionGroup type="radio">
          {data?.results.map((platform) => (
            <MenuItemOption
              key={platform.id}
              value={platform.name}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
