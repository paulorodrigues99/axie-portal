import { Box, Heading, Text, Button } from "@chakra-ui/react";
import NextImage from "next/image";

import { SEO } from "../components/seo";

const Home = () => (
  <>
    <SEO title="Home" />

    <Box
      as="section"
      maxW="1440px"
      py="4"
      px={[4, 6, 10, 14, 20]}
      mx="auto"
      display="flex"
      flexDir={{ base: "column-reverse", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      textAlign={{ base: "center", lg: "left" }}
    >
      <Box pr={{ lg: "4" }} maxW={{ base: "90%", lg: "50%" }}>
        <Heading
          as="h1"
          fontSize={{ base: "1.5rem", sm: "2rem", lg: "3rem" }}
          fontWeight="800"
        >
          Venha fazer parte desse time com R$ 0 de investimento.
        </Heading>
        <Text fontWeight="400" pt="4" pb="10">
          Axie Infinity é um videogame online baseado em NFT desenvolvido pelo
          estúdio vietnamita Sky Mavis, que usa criptomoeda AXS e SLP baseados
          em Ethereum.
        </Text>
        <Box
          display="flex"
          justifyContent={{ base: "center", lg: "flex-start" }}
          alignItems="center"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Button
            colorScheme="facebook"
            variant="outline"
            mb="2"
            px="12"
            fontWeight="600"
            size="lg"
          >
            Login
          </Button>
        </Box>
      </Box>
      <Box maxW={{ base: "xl", lg: "auto" }}>
        <NextImage
          src="/team-bro.png"
          width="600"
          height="600"
          alt="team"
          priority
        />
      </Box>
    </Box>
  </>
);

export default Home;
