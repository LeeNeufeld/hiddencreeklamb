import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <footer>
      <Box>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}></Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
