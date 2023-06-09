import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../../store";

const SortSelector = () => {
  /*
  name, released, added, created, updated, rating, metacritic */
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const onSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrder.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        fontSize={["0.8rem", "1rem"]}
      >
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup defaultValue="Relevance" type="radio">
          {sortOrder.map((order) => (
            <MenuItemOption
              key={order.value}
              value={order.value}
              onClick={() => {
                onSelectSortOrder(order.value);
              }}
            >
              {order.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
