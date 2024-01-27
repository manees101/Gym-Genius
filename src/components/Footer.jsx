import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
const Footer = () => {
  return (
    <Box mt="40px" bgcolor="#fff3f4">
      <Stack alignItems="center" gap="40px" px="40px" pt="20px">
        <img
          src={Logo}
          alt="footer_logo"
          style={{ width: "50px", height: "50px" }}
        />
        <Typography variant="h6">Made with love by Gym Genius.</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
