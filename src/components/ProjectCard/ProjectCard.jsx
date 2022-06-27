import React, { useState, useEffect, Suspense } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useInView } from "react-intersection-observer";
import ReactImage from "../ReactImage/ReactImage.jsx";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";

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
  const matchesLGdown = useMediaQuery(theme.breakpoints.down("lg"));

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

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
    <Fade
      in={flag}
      style={
        (!isMobile || !matchesLGdown) && {
          // transformOrigin: "0 0 0",
          transitionDelay: `${(index + `00`) / 8}ms`,
        }
      }
      timeout={400}
    >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={4} ref={ref}>
        <Card className={styles.root}>
          <CardActionArea
            className={styles.actionArea}
            component={Link}
            to={link}
          >
            {isMobile && (
              <Suspense
                fallback={
                  <div style={{ height: "100%" }}>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ReactImage
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  image={image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "30em",
                    objectFit: "cover",
                    display: "block",
                    lineHeight: 0,
                  }}
                  className={styles.media}
                />
              </Suspense>
            )}

            {!isMobile && (
              <Suspense
                fallback={
                  <div style={{ height: "100%" }}>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ReactImage
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  image={image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "30em",
                    objectFit: "cover",
                    transition: "transform 0.15s ease-in-out",
                    "&:hover": {
                      transform: "scale3d(1.02, 1.02, 1)",
                    },
                    display: "block",
                    lineHeight: 0,
                  }}
                  className={styles.media}
                />
              </Suspense>
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
          </CardActionArea>
        </Card>
      </Grid>
    </Fade>
  );
};

export default ProjectCard;
