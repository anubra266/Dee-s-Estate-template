import { Box } from "@chakra-ui/react";
import { Hero } from "lib/pages/home/components/hero";
import { Navbar } from "lib/pages/home/components/navbar";

const Home = () => {
  return (
    <Box
      sx={{
        button: {
          bg: "#2549D3",
          opacity: "0.9",
          color: "white",

          "&:hover, &:active": {
            opacity: "1",
            bg: "#2549D3",
          },
        },
      }}
    >
      <Navbar />
      <Hero />
    </Box>
  );
};

export default Home;
