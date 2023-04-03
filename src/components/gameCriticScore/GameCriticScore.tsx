import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const GameCriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge variant="outline" paddingX="2" fontSize="14px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default GameCriticScore;
