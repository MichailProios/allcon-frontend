import React, { Suspense, useEffect, useState } from "react";

//Material-UI Styles
import { makeStyles, useTheme } from "@material-ui/styles";

import {
  Card,
  Grid,
  Typography,
  Fade,
  CardActionArea,
  CardHeader,
  CardMedia,
  Paper,
} from "@material-ui/core";
import { isMobile } from "react-device-detect";

import { useInView } from "react-intersection-observer";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import MuiImage from "material-ui-image";
import { Link } from "react-router-dom";
import ReactImage from "../ReactImage/ReactImage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { Img } from "react-image";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: "10em",
    // width: "auto",

    userDrag: "none",
    userSelect: "none",
  },
  cardAction: {
    height: "auto",
    userDrag: "none",
    userSelect: "none",

    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.005, 1.005, 1)",
    },
  },
  profileImage: {
    userDrag: "none",
    userSelect: "none",
  },
  profileDescription: { padding: "0.8em", width: "100%" },
}));

const ProfileCard = ({ link, title, subtitle, description, picture }) => {
  const styles = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, inView] = useInView();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (inView) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [inView]);

  return (
    <Fade in={flag} timeout={400}>
      <Card className={styles.root} ref={ref}>
        <CardActionArea
          className={styles.cardAction}
          component={Link}
          to={link}
        >
          <Grid container spacing={0}>
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
                          height: "auto",
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
        </CardActionArea>
      </Card>
    </Fade>
    // {/* </Suspense> */}
  );
};
export default ProfileCard;
