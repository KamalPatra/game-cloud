import GameCardContainer from "../gameCardContainer/GameCardContainer";
import GameCardSkeleton from "../gameCardSkeleton/GameCardSkeleton";

const GameCardLoader = () => {
  const gameSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {gameSkeletons.map((skeleton) => (
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
        </GameCardContainer>
      ))}
    </>
  );
};

export default GameCardLoader;
