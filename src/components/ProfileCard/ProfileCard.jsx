import React from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import { Paper, Grid, Typography, Grow, Divider } from "@material-ui/core";

import Image from "material-ui-image";

const useStyles = makeStyles({
  root: { margin: "2em 14em 2em 14em", width: "auto" },
  profileImage: {},
  profileDescription: { width: "100%" },
});

const ProfileCard = ({ image }) => {
  const styles = useStyles();
  return (
    <Paper className={styles.root}>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Image
            imageStyle={{}}
            src={image}
            cover={true}
            animationDuration={100}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Typography variant="h6" className={styles.profileDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et molestie odio. Donec tortor nunc, venenatis sed
            porttitor et, aliquet et lacus. Nunc dignissim sollicitudin sodales.
            Sed dapibus nibh ultrices risus scelerisque vestibulum. Vivamus ut
            augue lectus. Pellentesque ultricies, elit at blandit fermentum,
            diam eros varius libero, nec auctor lacus nisi ut lectus. Vivamus eu
            dictum nisi. Aliquam malesuada purus semper odio lacinia, sit amet
            ultricies nulla tincidunt. Morbi sit amet vehicula sem.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileCard;
