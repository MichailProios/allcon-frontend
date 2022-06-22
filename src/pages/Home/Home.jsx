import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import church from "../../utilities/images/optimizedImages/image003.jpg";
import lupton from "../../utilities/images/optimizedImages/10-23-1-22.webp";
import brightwater500 from "../../utilities/images/optimizedImages/1-18-2022-35.webp";
import nold from "../../utilities/images/optimizedImages/11-6-21-2.webp";

import MuiImage from "material-ui-image";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

import { useTransition, animated, config } from "react-spring";

import { isMobile } from "react-device-detect";
import useDetectHeight from "../../utilities/customHooks/useDetectHeight";

import { Paper, Typography, Fade } from "@material-ui/core";

import SwipeableViews from "react-swipeable-views";
import { autoPlay, virtualize } from "react-swipeable-views-utils";

import cacheImages from "../../utilities/customFunctions/cacheImages.jsx";
import delayTransition from "../../utilities/customFunctions/delayTransition";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import SimpleImageSlider from "react-simple-image-slider";

const useStyles = makeStyles((theme) => ({
  quote: {
    margin: 0,
    position: "absolute",
    width: "auto",
    top: "90%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    wordWrap: "break-word",
    textAlign: "center",
    color: "#fff",
    letterSpacing: "0.04em",
    fontSize: "2em",
    fontSmooth: "5em",
    fontFamily: "EB Garamond , serif !important",

    userSelect: "none",
    userDrag: "none",

    [theme.breakpoints.down("lg")]: {
      top: "90%",
      left: "30%",
    },

    [theme.breakpoints.down("md")]: {
      top: "90%",
      left: "40%",
    },

    [theme.breakpoints.down("sm")]: {
      top: "85%",
      left: "35%",
    },
  },
}));

const items = [
  {
    id: 0,
    name: "Lupton",
    image: lupton,
    position: -50,
  },
  {
    id: 1,
    name: "Church",
    image: church,
    position: -300,
  },
];

const Home = () => {
  const styles = useStyles();
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const height = useDetectHeight();

  const images = [
    { url: lupton },
    { url: nold },
    { url: brightwater500 },
    { url: church },
  ];

  return (
    <Fade in={true} timeout={300}>
      <div>
        <SimpleImageSlider
          width={"100%"}
          height={isMobile ? `${height}px` : `calc(${height}px - 65px)`}
          images={images}
          showBullets={true}
          loop={true}
          autoPlay={true}
          autoPlayDelay={5.0}
        />

        <Fade
          in={true}
          style={{
            // transformOrigin: "0 0 0",
            transitionDelay: `${15 + `00`}ms`,
          }}
          timeout={300}
        >
          <Typography variant="h4" className={styles.quote}>
            Infinite Possibilities through Integrated Solutions
          </Typography>
        </Fade>
      </div>
    </Fade>
  );
};

export default Home;
