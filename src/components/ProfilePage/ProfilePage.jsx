import React, { Suspense } from "react";

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
import ReactImage from "../ReactImage/ReactImage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
      padding: "2em 8em 2em 8em",
    },

    [theme.breakpoints.down("md")]: {
      padding: "2em 8em 2em 8em",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2em 1em 2em 1em",
    },
  },
  cardAction: {
    height: "auto",
    minHeight: "60vh",
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
              style={{ display: "block", lineHeight: 0 }}
            >
              <Suspense
                fallback={
                  <div style={{ height: "100%" }}>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ReactImage
                  image={picture}
                  style={
                    matchesMD
                      ? {
                          width: "100%",
                          objectFit: "contain",
                          display: "block",
                          lineHeight: 0,
                        }
                      : {
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                          display: "block",
                          lineHeight: 0,
                        }
                  }
                  className={styles.profileImage}
                />
              </Suspense>
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
