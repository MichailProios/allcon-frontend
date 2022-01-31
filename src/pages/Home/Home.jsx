import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

import lupton from "../../utilities/images/Home/lupton.jpg";
import church from "../../utilities/images/Home/church.jpg";

import MuiImage from "material-ui-image";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

import { Paper, Typography, Fade } from "@material-ui/core";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    overflow: "hidden",
    width: "100%",
    // position: "fixed",
    // left: 0,
    // top: -50,
    userDrag: "none",
    userSelect: "none",
  },
  picture: {
    userDrag: "none",
    userSelect: "none",
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
    height: "90vh",
    userDrag: "none",
    userSelect: "none",
  },
}));

const Home = () => {
  const styles = useStyles();
  const theme = useTheme();

  useEffect(() => {
    const img1 = new Image();
    img1.src = lupton.fileName;

    const img2 = new Image();
    img2.src = church.fileName;
  }, []);

  const items = [
    {
      name: "Lupton",
      image: lupton,
      position: -50,
    },
    {
      name: "Church",
      image: church,
      position: -300,
    },
  ];

  return (
    <Fade in={useDelayTransition(150)} timeout={500}>
      <div>
        <Carousel
          animation={"fade"}
          autoPlay={true}
          indicators={false}
          swipe={false}
          navButtonsAlwaysInvisible={true}
          stopAutoPlayOnHover={false}
          interval={15000}
          duration={500}
          className={styles.homeContainer}
        >
          {items.map((item, i) => (
            <Picture key={i} {...item} />
          ))}
        </Carousel>

        {/* <AutoPlaySwipeableViews
          className={styles.views}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          enableMouseEvents={false}
        >
          {items.map((item, i) => (
            <Picture key={i} {...item} />
          ))}
        </AutoPlaySwipeableViews> */}
      </div>
    </Fade>
  );
};

const Picture = ({ name, image, position }) => {
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <MuiImage
        imageStyle={{
          width: "100%",
          height: "auto",
          position: "fixed",
          left: 0,
          top: position,
          userDrag: "none",
          userSelect: "none",
        }}
        animationDuration={100}
        src={image}
        className={styles.picture}
      />

      {/* <img
          style={{
            width: "100%",
            height: "auto",
            position: "fixed",
            left: 0,
            top: position,
          }}
          src={image}
          alt="img"
        /> */}

      <Fade in={useDelayTransition(1000)} timeout={1500}>
        <Typography variant="h4" className={styles.quote}>
          Infinite Possibilities through Integrated Solutions
        </Typography>
      </Fade>
    </Paper>
  );
};

export default Home;
