import React, { useEffect, useState, Suspense } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import church from "../../utilities/images/optimizedImages/image003.jpg";
import lupton from "../../utilities/images/optimizedImages/10-23-1-22.webp";
import brightwater500 from "../../utilities/images/optimizedImages/1-18-2022-35.webp";
import nold from "../../utilities/images/optimizedImages/11-6-21-2.webp";

import MuiImage from "material-ui-image";
import ApartmentIcon from "@material-ui/icons/Apartment";
import Slider from "react-slick";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

import { useTransition, animated, config } from "react-spring";

import { isMobile } from "react-device-detect";
import useDetectHeight from "../../utilities/customHooks/useDetectHeight";

import {
  Paper,
  Typography,
  Fade,
  Button,
  InputAdornment,
} from "@material-ui/core";

import SwipeableViews from "react-swipeable-views";
import { autoPlay, virtualize } from "react-swipeable-views-utils";

import cacheImages from "../../utilities/customFunctions/cacheImages.jsx";
import delayTransition from "../../utilities/customFunctions/delayTransition";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router";

import SimpleImageSlider from "react-simple-image-slider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useImage } from "react-image";
import { AccountCircleTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  quote: {
    margin: 0,
    width: "100%",
    wordWrap: "break-word",
    textAlign: "center",
    userSelect: "none",
    userDrag: "none",

    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    fontSize: "2.3em",

    [theme.breakpoints.down("lg")]: { fontSize: "2.0em" },

    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
  quoteContainer: {
    textAlign: "center",
    width: "100%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },

  quoteButton: {
    marginTop: "0.2em",
    fontSize: "1em",

    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
}));

const ReactImage = ({ image, imageStyles }) => {
  const { src } = useImage({
    srcList: image,
  });

  return <img src={src} alt="" style={imageStyles} />;
};

const Home = () => {
  const styles = useStyles();
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const height = useDetectHeight();

  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    lazyLoad: "progressive",
  };

  return (
    <Fade in={true} timeout={300}>
      <div
        style={{
          display: "block",
          lineHeight: 0,
          touchAction: "none",
          userDrag: "none",
          userSelect: "none",
        }}
      >
        <Slider {...settings}>
          <div>
            <Suspense fallback={<LoadingSpinner />}>
              <ReactImage
                image={nold}
                imageStyles={{
                  height: `calc(${height}px - 65px)`,
                  objectFit: "cover",
                  width: "100%",
                  display: "block",
                  lineHeight: 0,
                  userDrag: "none",
                  userSelect: "none",
                  pointerEvents: "none",
                  filter: "brightness(50%)",
                }}
              />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={<LoadingSpinner />}>
              <ReactImage
                image={brightwater500}
                imageStyles={{
                  height: `calc(${height}px - 65px)`,
                  objectFit: "cover",
                  width: "100%",
                  display: "block",
                  lineHeight: 0,
                  userDrag: "none",
                  userSelect: "none",
                  pointerEvents: "none",
                  filter: "brightness(50%)",
                }}
              />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={<LoadingSpinner />}>
              <ReactImage
                image={lupton}
                imageStyles={{
                  height: `calc(${height}px - 65px)`,
                  objectFit: "cover",
                  width: "100%",
                  display: "block",
                  lineHeight: 0,
                  userDrag: "none",
                  userSelect: "none",
                  pointerEvents: "none",
                  filter: "brightness(50%)",
                }}
              />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={<LoadingSpinner />}>
              <ReactImage
                image={church}
                imageStyles={{
                  height: `calc(${height}px - 65px)`,
                  objectFit: "cover",
                  width: "100%",
                  display: "block",
                  lineHeight: 0,
                  userDrag: "none",
                  userSelect: "none",
                  pointerEvents: "none",
                  filter: "brightness(50%)",
                }}
              />
            </Suspense>
          </div>
        </Slider>

        <Fade
          in={true}
          style={{
            // transformOrigin: "0 0 0",
            transitionDelay: `${15 + `00`}ms`,
          }}
          timeout={400}
        >
          <div className={styles.quoteContainer}>
            <Typography className={styles.quote}>
              Infinite Possibilities through Integrated Solutions
            </Typography>
            <Button
              className={styles.quoteButton}
              color="secondary"
              variant="outlined"
              startIcon={<ApartmentIcon />}
              onClick={() => navigate("/Projects")}
            >
              explore our projects
            </Button>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};

export default Home;
