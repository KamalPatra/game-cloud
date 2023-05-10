import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../react-query/hooks/usePlatform";
import usePlatforms from "../../react-query/hooks/usePlatforms";
import useGameQueryStore from "../../store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);
  const platform = usePlatform(selectedPlatformId);

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
              onClick={() => onSelectPlatform(platform.id)}
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
