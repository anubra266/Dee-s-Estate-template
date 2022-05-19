import { Button, Flex, Text } from "@chakra-ui/react";
import { Logo } from "lib/components/auth/logo";

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
      gap="40"
    >
      <Logo height="20px" />
      <Flex align="center" gap="16">
        {ROUTES.map((route) => (
          <Text
            color={route.isActive ? "#0F298B" : "black"}
            fontWeight={route.isActive ? "bold" : "normal"}
          >
            {route.label}
          </Text>
        ))}
      </Flex>
      <Button
        bg="#2549D3"
        color="white"
        opacity="0.9"
        _hover={{ opacity: "1" }}
        size="lg"
      >
        Get Started
      </Button>
    </Flex>
  );
};
