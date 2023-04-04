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
import getCroppedImageUrl from "../../services/image-url";

const GenreList = () => {
  const { data } = useGenreList();
  return (
    <>
      <Heading fontSize="3xl" marginY={1}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
