import { Box, VisuallyHidden } from "@chakra-ui/react";
import { Turn as Hamburger } from "hamburger-react";

const HamburgerMenu = ({ toggled, toggle }) => (
  <>
    <Box display={{ lg: "none" }}>
      <VisuallyHidden>hamburger menu</VisuallyHidden>
      <Hamburger
        hideOutline={false}
        label="hamburger menu"
        size={25}
        toggled={toggled}
        toggle={toggle}
        direction="right"
      />
    </Box>
  </>
);

export default HamburgerMenu;
