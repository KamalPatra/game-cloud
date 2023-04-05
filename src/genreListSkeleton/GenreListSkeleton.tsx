import {
  Box,
  HStack,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY={1}>
      <HStack>
        <Skeleton width="32px" height="32px" borderRadius={8} />
        <SkeletonText skeletonHeight="2" noOfLines={1} width="50%" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
