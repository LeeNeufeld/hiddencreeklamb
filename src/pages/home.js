import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FarmSign from "../images/farmSign-removebg.png";
import SheepSunset from "../images/sheep2-min.jpg";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <div>
      <Box>
        <Grid container textAlign="center" spacing={2}>
          <Grid sx={{ display: { xs: "none", lg: "block" } }} lg={2} />
          <Grid item xs={12} lg={8} sx={{ m: 3 }}>
            <img
              width="50%"
              height="auto"
              className=" img-fluid "
              alt="Responsive"
              src={FarmSign}
            />
          </Grid>
          <Grid sx={{ display: { xs: "none", lg: "block" } }} lg={2} />
          <Grid justifyItems="center" xs={12}>
            <Typography variant="h3" sx={{ m: 3 }} gutterBottom component="div">
              Welcome to Hidden Creek Farm
            </Typography>
          </Grid>
          <Grid sx={{ display: { xs: "none", lg: "block" } }} lg={4} />
          <Grid justifyItems="center" xs={12} lg={4}>
            <Typography
              variant="h6"
              sx={{ width: "100%", maxWidth: 700 }}
              sx={{ m: 3 }}
              component="div"
            >
              Taste that old fashioned wholesome goodness with our Hidden Creek
              Lamb. Raised naturally on the lush grasses of the Pacific
              Northwest. Our ewes are bred for meat and not wool, therefore give
              a far more superior flavor than the imported commercial cuts you
              find in stores.
            </Typography>
          </Grid>
          <Grid sx={{ display: { xs: "none", lg: "block" } }} lg={4} />
          <Grid sx={{ display: { xs: "none", lg: "block" } }} lg={2} />
          <Grid item xs={12} lg={8} sx={{ m: 3 }}>
            <img
              width="100%"
              height="auto"
              className=" img-fluid "
              alt="Responsive"
              src={SheepSunset}
            />
          </Grid>
          <Grid sx={{ display: { xs: "none", lg: "block" } }} lg={2} />
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
