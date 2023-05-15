import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/expandabletText/ExpandableText";
import GameAttributes from "../components/gameAttributes/GameAttributes";
import GameScreenshots from "../components/gameScreenshots/GameScreenshots";
import GameTrailer from "../components/gameTrailer/GameTrailer";
import useGameDetail from "../react-query/hooks/useGameDetail";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading mb={5}>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
