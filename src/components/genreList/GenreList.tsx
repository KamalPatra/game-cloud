import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import GenreListSkeleton from "../../genreListSkeleton/GenreListSkeleton";
import useGenreList from "../../react-query/hooks/useGenreList";
import getCroppedImageUrl from "../../services/image-url";
import useGameQueryStore from "../../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenreList();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const onSelectGenre = useGameQueryStore((s) => s.setGenreId);
  const skeletonList = [1, 2, 3, 4, 5];
  if (error) return null;
  return (
    <>
      <Heading fontSize="3xl" marginY={1}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletonList.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
