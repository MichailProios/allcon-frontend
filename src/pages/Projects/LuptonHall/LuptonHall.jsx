import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@mui/material/Box";
import { Divider } from "@material-ui/core";

import * as Scroll from "react-scroll";
import { isMobile } from "react-device-detect";
import {
  LinkScroll,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import MobileStepper from "@material-ui/core/MobileStepper";

import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";

import wait from "wait";

import MuiImage from "material-ui-image";

import useDelayTransition from "../../../utilities/customHooks/useDelayTransition";

import { Paper, Grid, Fade, Grow } from "@material-ui/core";

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",
    width: "100%",
  },
  picture: {
    userDrag: "none",
    userSelect: "none",
    // height: "45em",
  },
  carousel: {
    width: "100%",
    // height: "45em",
  },

  views: {
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },

  stepper: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    overflow: "none",
  },
  accordionHeader: {
    fontWeight: "bold",
  },

  paper: {
    overflow: "hidden",
    height: "45em",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },

  cardHeader: {
    userSelect: "none",
    userDragL: "none",
  },
  textPrimary: {
    userSelect: "none",
    useDrag: "none",
  },
  textSecondary: {
    // userSelect: "contain",
    useDrag: "none",
  },
}));
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function slideRenderer(params, images) {
  const { index, key } = params;

  return <Picture key={key} image={Object.values(images)[index]} />;
}

let images = importAll(
  require.context(
    "../../../utilities/images/lupton-hall",
    false,
    /\.(JPG|PNG|png|jpe?g|svg)$/
  )
);

const LuptonHall = () => {
  const styles = useStyles();
  const theme = useTheme();

  // useEffect(() => {
  //   Object.values(images).forEach((picture) => {
  //     const img = new Image();
  //     img.src = picture;
  //   });
  // }, []);

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Object.values(images).length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleClick = (event, expanded) => {
    if (expanded) {
      if (isMobile) {
        scroll.scrollToBottom({
          duration: 800,
          delay: 250,
          smooth: "easeInOutQuart",
        });
      } else {
        scroll.scrollToBottom({
          duration: 0,
          delay: 250,
          smooth: "easeInOutQuart",
        });
      }
    }
  };

  return (
    <Grid container spacing={1} className={styles.root}>
      <Fade in={useDelayTransition(150)} timeout={500}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={10}>
          <Paper elevation={2} className={styles.carousel}>
            <VirtualizeSwipeableViews
              className={styles.views}
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents={false}
              slideRenderer={(params) => slideRenderer(params, images)}
              overscanSlideAfter={1}
              overscanSlideBefore={1}
              disableLazyLoading={false}
              slideCount={maxSteps}
              animateTransitions={true}
            />

            <MobileStepper
              className={styles.stepper}
              steps={maxSteps}
              position="static"
              variant="dots"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Paper>
        </Grid>
      </Fade>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={2}>
        <Grow in={useDelayTransition(400)} timeout={800}>
          <Card style={{ height: "48em" }}>
            <CardHeader title="Project Info" className={styles.cardHeader} />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Project Name:
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    SUNY Lupton Hall
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Project Location:
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    2350 Broadhollow Road, Farmingdale, NY 11735
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Client/ Affiliated Agency:
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    NYS OGS – Design & Construction Group
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Year Completed:
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    In Progress
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Project Cost/Budget:
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    $10,856,274.00
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="h6" className={styles.textPrimary}>
                    Project Designer:
                  </Typography>
                  <Typography variant="body1" className={styles.textSecondary}>
                    Hoffmann Architects, Inc.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grow>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grow in={useDelayTransition(800)} timeout={800}>
          <Accordion onChange={handleClick}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="body1"
                component="div"
                className={styles.accordionHeader}
              >
                <Box sx={{ fontWeight: "bold" }}>
                  Project Description (Click to Expand)
                </Box>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className={styles.textPrimary}>
                An extensive 90,000 square foot of new copper roofing. The
                project started with the removal of the existing roofing system
                and Asbestos abatement.
                <br /> <br />
                Moving to a new unique structural design that Allcon proposed
                and developed.
                <br /> <br />
                The structural design included a high gauge metal system that
                bypass the concrete deck and attached to the existing structural
                system with blind bolts (box bolts) and withstands wind speed up
                to 126 mph.
                <br /> <br />
                The copper fabrication was a mix between machine fabrications
                for the panels and hand art for the little details.
                <br /> <br />
                With all the beautiful details, this building is set to be a
                landmarks for Farmingdale.
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
      <MuiImage
        imageStyle={{
          maxWidth: "100%",
          height: "45em",
          objectFit: "contain",

          // position: "fixed",
          // left: 0,
          // top: position,
          // userDrag: "none",
          // userSelect: "none",
          // borderRadius: "4px",
        }}
        // cover={true}
        iconContainerStyle={{
          maxWidth: "100%",
          height: "45em",
        }}
        animationDuration={800}
        disableTransition={false}
        src={image}
        className={styles.picture}
      />
    </Paper>
  );
};

export default LuptonHall;
