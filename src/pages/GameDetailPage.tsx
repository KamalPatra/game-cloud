import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/expandabletText/ExpandableText";
import useGameDetail from "../react-query/hooks/useGameDetail";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data: game, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading mb={5}>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
