import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import { SiXbox, SiWindows, SiPlaystation } from "react-icons/si";
import { Game } from "../../hooks/useGameList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
