import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../../entities/Game";
import DefinitionItem from "../definitionItem/DefinitionItem";
import GameCriticScore from "../gameCriticScore/GameCriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem title="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="Metascore">
        <GameCriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem title="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
