import { Button, Flex, Text } from "@chakra-ui/react";
import { Logo } from "lib/components/logo";

const ROUTES = [
  {
    label: "Home",
    isActive: true,
  },
  {
    label: "Rent",
  },
  {
    label: "Land",
  },
  {
    label: "Agent",
  },
  {
    label: "Contact Us",
  },
];

export const Navbar = () => {
  return (
    <Flex
      align="center"
      px="20"
      py="8"
      borderBottom="1px solid #C4C4C4"
      justify="space-between"
    >
      <Logo height="20px" />
      <Flex align="center" gap="16">
        {ROUTES.map((route) => (
          <Text
            key={route.label}
            color={route.isActive ? "#0F298B" : "black"}
            fontWeight={route.isActive ? "bold" : "normal"}
          >
            {route.label}
          </Text>
        ))}
      </Flex>
      <Button size="lg" mr="16">
        Get Started
      </Button>
    </Flex>
  );
};
