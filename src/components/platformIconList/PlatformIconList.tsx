import { Platform } from "../../hooks/useGameList";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  SiAndroid,
  SiXbox,
  SiWindows,
  SiPlaystation,
  SiNintendoswitch,
  SiApple,
  SiLinux,
  SiIos,
  SiGooglechrome,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: SiWindows,
    playstation: SiPlaystation,
    xbox: SiXbox,
    nintendo: SiNintendoswitch,
    mac: SiApple,
    android: SiAndroid,
    ios: SiIos,
    web: SiGooglechrome,
    linux: SiLinux,
  };
  return (
    <HStack>
      {platforms.map((platform, index) => (
        <Icon key={index} as={iconMap[platform.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
