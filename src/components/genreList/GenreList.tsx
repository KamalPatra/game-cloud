import {
  ListItem,
  Image,
  List,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import GenreListSkeleton from "../../genreListSkeleton/GenreListSkeleton";
import useGenreList, { Genre } from "../../react-query/hooks/useGenreList";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  // const { data, isLoading, error } = useGenreList();
  const { data, error, isLoading } = useGenreList();
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
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
