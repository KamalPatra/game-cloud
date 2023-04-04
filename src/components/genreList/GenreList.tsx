import {
  Box,
  ListItem,
  Image,
  Text,
  List,
  Heading,
  HStack,
} from "@chakra-ui/react";
import useGenreList from "../../hooks/useGenreList";

const GenreList = () => {
  const { genres, error, isLoading } = useGenreList();
  return (
    <>
      <Heading fontSize="3xl" marginY={1}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} marginY={2}>
            <HStack>
              <Box borderRadius="5px" overflow="hidden">
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src={genre.image_background}
                  alt="Dan Abramov"
                />
              </Box>
              <Text fontSize="20px">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
