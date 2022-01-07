import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

import lupton from "../../utilities/images/Home/lupton.jpg";
import church from "../../utilities/images/Home/church.jpg";

import Image from "material-ui-image";

import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    overflow: "hidden",
    height: "100%",
  },
  picture: {
    width: "100%",
    height: "auto",
    position: "fixed",
    left: 0,
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
    height: "88vh",
  },
}));

const Home = () => {
  const styles = useStyles();
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
    <div>
      <Carousel
        animation={"fade"}
        autoPlay={true}
        indicators={true}
        stopAutoPlayOnHover={false}
        interval={15000}
        duration={500}
        className={styles.homeContainer}
      >
        {items.map((item, i) => (
          <Picture key={i} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

const Picture = ({ name, image, position }) => {
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <Image
        imageStyle={{
          width: "100%",
          height: "auto",
          position: "fixed",
          left: 0,
          top: position,
        }}
        animationDuration={100}
        src={image}
      />

      <Typography variant="h4" className={styles.quote}>
        Infinite Possibilities through Integrated Solutions
      </Typography>
    </Paper>
  );
};

export default Home;
