import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

import lupton from "../../utilities/images/Home/lupton.jpg";
import church from "../../utilities/images/Home/church.jpg";

import MuiImage from "material-ui-image";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

import { useTransition, animated, config } from "react-spring";

import { Paper, Typography, Fade } from "@material-ui/core";

import SwipeableViews from "react-swipeable-views";
import { autoPlay, virtualize } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(virtualize(SwipeableViews));

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    overflow: "hidden",
    width: "100%",
    height: "auto",
    // position: "fixed",
    // left: 0,
    // top: -50,
    userDrag: "none",
    userSelect: "none",
  },
  picture: {
    userDrag: "none",
    userSelect: "none",
    overflow: "hidden",
  },
  quote: {
    margin: 0,
    position: "absolute",
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
  },
  paper: {
    backgroundImage: "url(" + church + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    position: "fixed",
    left: 0,
    top: 0,
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
  // useEffect(() => {
  //   document.body.style.backgroundImage = `url(${church})`;
  //   document.body.style.backgroundRepeat = "no-repeat";
  //   document.body.style.backgroundPosition = "center";
  //   document.body.style.backgroundSize = "cover";
  // }, []);

  useEffect(
    () =>
      void setInterval(
        () => set((state) => (state === 0 ? state + 1 : state - 1)),
        5000
      ),
    []
  );

  console.log(index);

  return (
    <Fade in={useDelayTransition(150)} timeout={500}>
      <Paper
        style={{
          backgroundImage: "url(" + lupton + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* <AutoPlaySwipeableViews
          className={styles.homeContainer}
          // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          // index={activeStep}
          // onChangeIndex={handleStepChange}'
          ignoreNativeScroll={true}
          enableMouseEvents={false}
          animateHeight={true}
          slideRenderer={(params) => slideRenderer(params, items)}
          overscanSlideAfter={0}
          overscanSlideBefore={0}
          disableLazyLoading={true}
          slideCount={maxSteps}
          animateTransitions={false}
          autoplay={true}
          interval={3000}
        /> */}

        {/* {index === 0 ? (
          <Picture image={church} position={-350} />
        ) : index === 1 ? (
          <Picture image={lupton} position={-50} />
        ) : (
          <div />
        )} */}

        <Fade in={useDelayTransition(1000)} timeout={1500}>
          <Typography variant="h4" className={styles.quote}>
            Infinite Possibilities through Integrated Solutions
          </Typography>
        </Fade>
      </Paper>
    </Fade>
  );
};

const Picture = ({ name, image, position }) => {
  const styles = useStyles();

  // const [flag, setFlag] = useState(false);

  // useEffect(() => {
  //   setFlag(true);
  // }, [flag]);

  return (
    <Paper className={styles.paper}>
      <MuiImage
        imageStyle={{
          width: "100%",
          height: "auto",
          position: "fixed",
          left: 0,
          top: position,
          // objectFit: "contain",

          overflow: "hidden",

          // userDrag: "none",
          // userSelect: "none",
        }}
        animationDuration={500}
        disableTransition={true}
        src={image}
        className={styles.picture}
      />
    </Paper>
  );
};

export default Home;
