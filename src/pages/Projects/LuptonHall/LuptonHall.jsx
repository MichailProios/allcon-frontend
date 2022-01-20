import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Image from "material-ui-image";

import useDelayTransition from "../../../utilities/customHooks/useDelayTransition";

import { Paper, Grid, Fade, Grow } from "@material-ui/core";

import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",
    width: "100%",
  },
  picture: {
    userDrag: "none",
    userSelect: "none",
    // borderRadius: "4px",
    // width: "100%",
    // height: "60vh",
    height: "35em",
  },
  carousel: {
    borderRadius: "4px",
    width: "100%",
    height: "100%",
  },

  paper: { height: "46em" },
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
      "../../../utilities/images/lupton-hall",
      false,
      /\.(JPG|PNG|png|jpe?g|svg)$/
    )
  );

  images = Object.values(images);

  return (
    <Grid container spacing={1} className={styles.root}>
      <Grow in={useDelayTransition(150)} timeout={800}>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
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
            indicatorContainerProps={{
              style: { width: "100%", marginTop: "10px", textAlign: "center" },
            }}
            indicatorIconButtonProps={{
              style: {
                cursor: "pointer",
                transition: "200ms",
                padding: 0,
                color: "#afafaf",
                "&:hover": {
                  color: "#1f1f1f",
                },
                "&:active": {
                  color: "#1f1f1f",
                },
              },
            }}
            activeIndicatorIconButtonProps={{
              style: { color: "#494949" },
            }}
          >
            {images.map((item, i) => (
              <Picture key={i} image={item} />
            ))}
          </Carousel>
        </Grid>
      </Grow>
      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        <Grow in={useDelayTransition(300)} timeout={800}>
          <Card style={{ height: "48em" }}>
            <CardHeader title="Project Info" />
            <CardContent></CardContent>
          </Card>
        </Grow>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grow in={useDelayTransition(600)} timeout={800}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Project Description (Click to Expand)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Suspendisse malesuada lacus ex, sit amet blandit leo
                lobortis eget. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget. Suspendisse malesuada lacus ex, sit
                amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grow>
      </Grid>
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
          height: "100%",
          // position: "fixed",
          // left: 0,
          // top: position,
          // userDrag: "none",
          // userSelect: "none",
          // borderRadius: "4px",
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
