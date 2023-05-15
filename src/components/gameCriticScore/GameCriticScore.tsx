import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const GameCriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      variant="outline"
      fontSize="14px"
      paddingX={2}
      colorScheme={color}
      borderRadius="md"
    >
      {score}
    </Badge>
  );
};

export default GameCriticScore;
