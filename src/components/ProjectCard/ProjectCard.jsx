import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MuiImage from "material-ui-image";
import { Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useInView } from "react-intersection-observer";

import { Slide, CardHeader, Paper } from "@material-ui/core";
import useDelayTransition from "../../utilities/customHooks/useDelayTransition.jsx";

import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    height: "30em",

    [theme.breakpoints.down("sm")]: {
      height: "26em",
    },
  },

  textOpacity: {
    position: "absolute",
    top: "95%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "10%",
    backgroundColor: "rgba(243, 243, 243, 0.5)",
    pointerEvents: "none",
  },

  media: {
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.02, 1.02, 1)",
    },
    userDrag: "none",
  },

  mediaSmall: {
    userDrag: "none",
  },

  actionArea: {
    textDecoration: "none",
    height: "30em",
    userDrag: "none",
    [theme.breakpoints.down("sm")]: {
      height: "26em",
    },
  },

  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    whiteSpace: "nowrap",
    pointerEvents: "none",
    fontWeight: 520,
  },
}));
const ProjectCard = ({ title, image, link, index }) => {
  const styles = useStyles();
  const theme = useTheme();

  // const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Fade in={true} timeout={400}>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
        <Card className={styles.root}>
          <CardActionArea
            className={styles.actionArea}
            component={Link}
            to={link}
          >
            {/* <MuiImage
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              imageStyle={{
                maxWidth: "100%",
                height: "30em",
                transition: "transform 0.15s ease-in-out",
                "&:hover": {
                  transform: "scale3d(1.02, 1.02, 1)",
                },
              }}
              iconContainerStyle={{
                maxWidth: "100%",
                height: "30em",
              }}
              src={image}
              cover={true}
              animationDuration={100}
              className={styles.media}
            /> */}

            {/* {isMobile && (
              <MuiImage
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                imageStyle={{
                  maxWidth: "100%",
                  height: "30em",
                }}
                iconContainerStyle={
                  matchesSM
                    ? { maxWidth: "100%", height: "26em" }
                    : { maxWidth: "100%", height: "30em" }
                }
                src={image}
                cover={true}
                animationDuration={100}
                className={styles.mediaSmall}
              />
            )} */}

            {!isMobile && (
              <MuiImage
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                imageStyle={{
                  maxWidth: "100%",
                  height: "30em",

                  transition: "transform 0.15s ease-in-out",
                  "&:hover": {
                    transform: "scale3d(1.02, 1.02, 1)",
                  },
                }}
                iconContainerStyle={{
                  maxWidth: "100%",
                  height: "30em",
                }}
                src={image}
                cover={true}
                animationDuration={100}
                className={styles.media}
              />

              // <LazyLoadImage
              //   src={image}
              //   onMouseOver={handleMouseOver}
              //   onMouseOut={handleMouseOut}
              //   alt=""
              //   width={"100%"}
              //   style={{
              //     height: "30em",
              //     objectFit: "cover",
              //     transition: "transform 0.15s ease-in-out",
              //     "&:hover": {
              //       transform: "scale3d(1.02, 1.02, 1)",
              //     },
              //   }}
              //   effect="blur"
              //   className={styles.media}
              // />
            )}

            {isMobile && (
              <Fade in={true} timeout={300}>
                <div className={styles.textOpacity}>
                  <Typography
                    className={styles.title}
                    color="textPrimary"
                    variant="subtitle1"
                  >
                    {title}
                  </Typography>
                </div>
              </Fade>
            )}

            {!isMobile && (
              <Fade in={isHovering} timeout={300}>
                <div className={styles.textOpacity}>
                  <Typography
                    className={styles.title}
                    color="textPrimary"
                    variant="h5"
                  >
                    {title}
                  </Typography>
                </div>
              </Fade>
            )}

            <Fade in={isHovering} timeout={300}>
              <div className={styles.textOpacity}>
                <Typography
                  className={styles.title}
                  color="textPrimary"
                  variant="h5"
                >
                  {title}
                </Typography>
              </div>
            </Fade>

            <Fade in={isHovering} timeout={300}>
              <div className={styles.textOpacity}>
                <Typography
                  className={styles.title}
                  color="textPrimary"
                  variant="h5"
                >
                  {title}
                </Typography>
              </div>
            </Fade>
          </CardActionArea>
        </Card>
      </Grid>
    </Fade>
  );
};

export default ProjectCard;
