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

    height: "auto",
    userDrag: "none",
    userSelect: "none",
  },
  container: {
    padding: "2em 10em 2em 10em",

    [theme.breakpoints.down("lg")]: {
      padding: "2em 6em 2em 6em",
    },

    [theme.breakpoints.down("md")]: {
      padding: "2em 3em 2em 3em",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2em 1em 2em 1em",
    },
  },
  cardAction: {
    height: "auto",
  },
  profileImage: {
    userDrag: "none",
    userSelect: "none",
  },
  profileDescription: { padding: "0.8em", width: "100%" },
}));

const ProfilePage = ({ picture, title, subtitle, description }) => {
  const styles = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grow in={true} timeout={800}>
      <div className={styles.container}>
        <Card className={styles.root}>
          <Grid
            container
            spacing={0}
            direction="row"
            className={styles.cardAction}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={3}
              style={
                {
                  // // padding: theme.spacing(3, 2),
                  // display: "flex",
                  // flexDirection: "column",
                  // justifyContent: "center",
                }
              }
            >
              <MuiImage
                imageStyle={
                  matchesMD
                    ? {
                        maxWidth: "100%",
                        height: "20em",
                      }
                    : {
                        maxWidth: "100%",
                        height: "auto",
                        // borderTopRightRadius: "2px",
                        // borderBottomRightRadius: "2px",
                      }
                }
                aspectRatio={matchesMD ? 1.5 : 1}
                iconContainerStyle={
                  matchesMD
                    ? {
                        maxWidth: "100%",
                        height: "auto",
                      }
                    : {
                        maxWidth: "100%",
                        height: "auto",
                      }
                }
                src={picture}
                cover={true}
                animationDuration={100}
                className={styles.profileImage}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
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
        </Card>
      </div>
    </Grow>
  );
};

export default ProfilePage;
