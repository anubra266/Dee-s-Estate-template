import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

import { HeroImage } from "lib/components/hero-image";

export function Hero() {
  return (
    <Flex px="20" py="20" gap="47px">
      <Stack flex="1" pt="24">
        <Heading
          letterSpacing="widest"
          lineHeight="61px"
          fontSize="5xl"
          color="#0F298B"
        >
          Helping you find the property of your dreams.
        </Heading>
        <Text letterSpacing="widest" lineHeight="10" fontSize="2xl">
          Creating quality urban lifestyles,building stronger communities
        </Text>

        <ButtonGroup pt="6" alignItems="center" spacing="10">
          <Button size="lg">Learn More</Button>
          <IconButton isRound aria-label="play" icon={<FaPlay />} />
        </ButtonGroup>
      </Stack>
      <Flex flex="1">
        <HeroImage maxW="full" />
      </Flex>
    </Flex>
  );
}
