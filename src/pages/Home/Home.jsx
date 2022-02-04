import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

import church from "../../utilities/images/optimizedImages/image003.jpg";
import lupton from "../../utilities/images/optimizedImages/10-23-1-22.jpg";
import brightwater500 from "../../utilities/images/optimizedImages/1-18-2022-35.jpg";
import nold from "../../utilities/images/optimizedImages/11-6-21-2.jpg";

import MuiImage from "material-ui-image";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

import { useTransition, animated, config } from "react-spring";

import { Paper, Typography, Fade } from "@material-ui/core";

import SwipeableViews from "react-swipeable-views";
import { autoPlay, virtualize } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(virtualize(SwipeableViews));

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
    fontFamily: "EB Garamond , serif",

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

  // useEffect(() => {
  //   const img1 = new Image();
  //   img1.src = lupton.fileName;

  //   const img2 = new Image();
  //   img2.src = church.fileName;
  // }, []);

  // const maxSteps = items.length;

  const [index, set] = useState(0);
  // const transitions = useTransition(slides[index], (item) => item.id, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: config.molasses,
  // });

  useEffect(
    () =>
      void setInterval(
        () =>
          set((state) =>
            state === 0
              ? (state = 1)
              : state === 1
              ? (state = 2)
              : state === 2
              ? (state = 3)
              : (state = 0)
          ) % 5,
        10000
      ),
    []
  );
  console.log(index);
  return (
    <Fade in={useDelayTransition(150)} timeout={500}>
      <div>
        {index === 0 && (
          <Fade in={true} timeout={800}>
            <Paper
              style={{
                backgroundImage: "url(" + lupton + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                overflow: "hidden",
              }}
            />
          </Fade>
        )}

        {index === 1 && (
          <Fade in={true} timeout={800}>
            <Paper
              style={{
                backgroundImage: "url(" + church + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                overflow: "hidden",
              }}
            />
          </Fade>
        )}

        {index === 2 && (
          <Fade in={true} timeout={800}>
            <Paper
              style={{
                backgroundImage: "url(" + brightwater500 + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                overflow: "hidden",
              }}
            />
          </Fade>
        )}

        {index === 3 && (
          <Fade in={true} timeout={800}>
            <Paper
              style={{
                backgroundImage: "url(" + nold + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                overflow: "hidden",
              }}
            />
          </Fade>
        )}

        <Fade in={useDelayTransition(1000)} timeout={1500}>
          <Typography variant="h4" className={styles.quote}>
            Infinite Possibilities through Integrated Solutions
          </Typography>
        </Fade>
      </div>
    </Fade>
  );
};

export default Home;
