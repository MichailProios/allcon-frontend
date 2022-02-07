import React from "react";

//Material-UI Styles
import { makeStyles, useTheme } from "@material-ui/styles";

import {
  Card,
  Grid,
  Typography,
  Grow,
  CardActionArea,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import { isMobile } from "react-device-detect";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import MuiImage from "material-ui-image";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: "10em",
    // width: "auto",
    padding: "2em 10em 2em 10em",

    [theme.breakpoints.down("lg")]: {
      padding: "2em 8em 2em 8em",
    },

    [theme.breakpoints.down("md")]: {
      padding: "2em 4em 2em 4em",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2em 1em 2em 1em",
    },

    height: "auto",
    userDrag: "none",
    userSelect: "none",
  },
  cardAction: {
    height: "20em",

    [theme.breakpoints.down("md")]: {
      height: "auto",
    },

    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.01, 1.01, 1)",
    },
  },
  profileImage: {
    userDrag: "none",
    userSelect: "none",
  },
  profileDescription: { padding: "0.8em", width: "100%" },
}));

const ProfilePage = ({ image, title, subtitle, description }) => {
  const styles = useStyles();
  const theme = useTheme();

  //   const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grow in={true} timeout={800}>
      <Card className={styles.root}>
        <CardActionArea className={styles.cardAction}>
          <Grid container spacing={0} direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <MuiImage
                imageStyle={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                iconContainerStyle={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                src={image}
                cover={true}
                animationDuration={100}
                className={styles.profileImage}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <CardHeader title={title} subheader={subtitle} />

              <Typography
                color="textPrimary"
                variant="h6"
                className={styles.profileDescription}
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grow>
  );
};

export default ProfilePage;
