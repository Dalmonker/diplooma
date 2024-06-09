import { Box, Link } from "@mui/material";

const Header = () => {
  return (
    <Box
      component="header"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      p={2}
      zIndex={2}
      bgcolor="#38444d"
      color="white"
      height="75px"
      pr="75px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1600px"
        width="100%"
        margin="0 auto"
      >
        <img
          className="logo"
          width="50px"
          height="50px"
          src="kit.png"
          alt="logo"
        />
      </Box>
    </Box>
  );
};

export default Header;
