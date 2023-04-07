import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../../assets/bulls-eye.webp";
import thumbsUp from "../../assets/thumbs-up.webp";
import meh from "../../assets/meh.webp";

interface Props {
  rating_top: number;
}
const Emoji = ({ rating_top }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  if (rating_top < 3) return null;
  return <Image {...emojiMap[rating_top]} marginTop={1}></Image>;
};

export default Emoji;
