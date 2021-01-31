import { Box } from "@chakra-ui/react";

import Logo from "../UI/logo";
import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <Box as="header" bg="customYellow" color="black">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={[4, 6, 10, 14, 20]}
          maxW="1440px"
          mx="auto"
          h="4rem"
        >
          <Logo />
          <Navbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
