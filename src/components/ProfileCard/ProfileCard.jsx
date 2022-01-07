import React from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import {
  Card,
  Grid,
  Typography,
  Grow,
  CardActionArea,
} from "@material-ui/core";

import Image from "material-ui-image";

const useStyles = makeStyles({
  root: { margin: "2em 14em 2em 14em", width: "auto" },
  profileImage: {},
  profileDescription: { width: "100%" },
});

const ProfileCard = ({ image, timeout, flag }) => {
  const styles = useStyles();
  return (
    <Grow in={flag} timeout={timeout}>
      <Card className={styles.root}>
        <CardActionArea>
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <Image
                imageStyle={{}}
                src={image}
                cover={true}
                animationDuration={100}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <Typography
                color="textPrimary"
                variant="h4"
                className={styles.profileDescription}
              >
                Title
              </Typography>
              <Typography
                color="textPrimary"
                variant="subtitle1"
                className={styles.profileDescription}
              >
                Sub Title
              </Typography>
              <Typography
                color="textPrimary"
                variant="h6"
                className={styles.profileDescription}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque et molestie odio. Donec tortor nunc, venenatis sed
                porttitor et, aliquet et lacus. Nunc dignissim sollicitudin
                sodales. Sed dapibus nibh ultrices risus scelerisque vestibulum.
              </Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grow>
  );
};

export default ProfileCard;
