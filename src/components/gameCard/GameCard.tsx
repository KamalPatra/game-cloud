import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../../entities/Game";
import getCroppedImageUrl from "../../services/image-url";
import Emoji from "../emoji/Emoji";
import GameCriticScore from "../gameCriticScore/GameCriticScore";
import PlatformIconList from "../platformIconList/PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} margin={1}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        objectFit="cover"
      />
      <CardBody>
        <HStack justifyContent="space-between" marginY={1}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameCriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl" marginY={1}>
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          <Emoji rating_top={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
