import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";

import Image from "material-ui-image";

import useDelayTransition from "../../../utilities/customHooks/useDelayTransition";

import { Paper, Grid, Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2.5em",
    width: "100%",
  },
  picture: {
    userDrag: "none",
    userSelect: "none",
    borderRadius: "4px",
    width: "100%",
    height: "auto",
  },
  carousel: {
    borderRadius: "4px",
    width: "100%",
    height: "auto",
  },
}));
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const LuptonHall = () => {
  const styles = useStyles();
  let images = importAll(
    require.context(
      "../../../utilities/images/carlplace",
      false,
      /\.(JPG|PNG|png|jpe?g|svg)$/
    )
  );
  console.log(images);
  images = Object.values(images);

  console.log(images);

  return (
    <Grid container spacing={2} className={styles.root}>
      <Fade in={useDelayTransition(150)} timeout={500}>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          xl={6}
          styles={{ height: "20px" }}
        >
          <Carousel
            className={styles.carousel}
            animation={"fade"}
            swipe={false}
            autoPlay={false}
            indicators={true}
            // navButtonsAlwaysVisible={true}
            stopAutoPlayOnHover={false}
            fullHeightHover={true}
            // interval={15000}
            duration={500}
            navButtonsProps={{
              style: {
                backgroundColor: "#008B8B",
                color: "#f3f3f3", // 3
              },
            }}
            navButtonsWrapperProps={{
              // Move the buttons to the bottom. Unsetting top here to override default style.
              style: {
                margin: "0.2em",
              },
            }}
          >
            {images.map((item, i) => (
              <Picture key={i} image={item} />
            ))}
          </Carousel>
        </Grid>
      </Fade>
    </Grid>
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
          // position: "fixed",
          // left: 0,
          // top: position,
          // userDrag: "none",
          // userSelect: "none",

          borderRadius: "4px",
        }}
        cover={true}
        animationDuration={100}
        src={image}
        className={styles.picture}
      />
    </Paper>
  );
};

export default LuptonHall;
