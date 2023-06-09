import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const onSearch = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
          navigate("/");
        }
      }}
      style={{ width: "70%" }}
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
