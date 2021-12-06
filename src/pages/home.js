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
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} lg={12} sx={{ m: 3 }}>
            <img
              width="100%"
              height="auto"
              className=" img-fluid "
              alt="Responsive"
              src={FarmSign}
            />
          </Grid>

          <Grid xs={12}>
            <Typography
              fontSize={{
                lg: 30,
                md: 20,
                sm: 15,
                xs: 10,
              }}
              fontWeight="bold"
              textAlign="center"
              sx={{ m: 3 }}
              gutterBottom
              component="div"
            >
              Welcome to Hidden Creek Farm
            </Typography>
          </Grid>

          <Grid
            xs={12}
            justifyItems="center"
            sx={{ width: "100%", maxWidth: 700 }}
          >
            <Typography
              fontSize={{
                lg: 30,
                md: 20,
                sm: 15,
                xs: 10,
              }}
              textAlign="center"
              sx={{ m: 3 }}
              component="div"
            >
              Taste that old fashioned wholesome goodness with our Hidden Creek
              Lamb. Raised naturally, on the lush grasses of the Pacific
              Northwest. Our ewes are bred for meat and not wool giving a far
              more superior flavor than the imported commercial cuts you find in
              stores.
            </Typography>
          </Grid>
          <Box sx={{ m: 3 }}>
            <Grid item xs={12} sx={{ width: "100%", maxWidth: 800 }}>
              <img
                width="100%"
                height="auto"
                className=" img-fluid "
                alt="Responsive"
                src={SheepSunset}
              />
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
