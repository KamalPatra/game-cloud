import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../../react-query/hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const platform = data?.results.find((p) => p.id === selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platform"}
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
