import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup size="lg">
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearch size="16" />}
        />
        <Input
          ref={ref}
          placeholder="Search Games"
          fontSize="16"
          borderRadius={25}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
