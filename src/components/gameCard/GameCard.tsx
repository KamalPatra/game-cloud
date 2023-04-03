import {
  AspectRatio,
  Box,
  Container,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { SiXbox, SiWindows, SiPlaystation } from "react-icons/si";
const GameCard = () => {
  return (
    <Box w="300px" borderRadius="5">
      <Box mb="3">
        <AspectRatio maxW="300px" ratio={4 / 3}>
          <Image
            src="https://bit.ly/naruto-sage"
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
      </Box>
      <Box mb="3">
        <Flex>
          <Box mr="2">
            <SiWindows />
          </Box>
          <Box mr="2">
            <SiPlaystation />
          </Box>
          <Box mr="2">
            <SiXbox />
          </Box>
        </Flex>
      </Box>
      <Box>
        <Heading size="lg">Naruto</Heading>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default GameCard;
