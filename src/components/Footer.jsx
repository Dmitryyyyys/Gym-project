import React from 'react';
import { Box, Stack, Typography } from "@mui/material";
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
      </Stack>
      <Typography variant="body1" align="center" color="textSecondary">
        Contact us:
        <br />
        Email: goldGYM@mail.com
        <br />
        Phone: +1234567890
        <br />
        Address: 123 Arrow St, New York, USA
      </Typography>
    </Box>
  );
};

export default Footer;
