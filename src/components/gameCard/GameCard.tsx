import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGameList";
import getCroppedImageUrl from "../../services/image-url";
import GameCriticScore from "../gameCriticScore/GameCriticScore";
import PlatformIconList from "../platformIconList/PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginY={1}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameCriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl" marginY={1}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
