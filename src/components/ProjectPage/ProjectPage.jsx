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

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";
import delayTransition from "../../utilities/customFunctions/delayTransition";

import { Paper, Grid, Fade, Grow } from "@material-ui/core";

import cacheImages from "../../utilities/customFunctions/cacheImages.jsx";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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

  card: {
    height: "48em",

    [theme.breakpoints.down("lg")]: {
      height: "auto",
    },
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
    userSelect: "none",
    useDrag: "none",
  },
}));

function slideRenderer(params, images) {
  const { index, key } = params;

  return <Picture key={key} image={Object.values(images)[index]} />;
}

const ProjectPage = ({
  pictures,
  projectName,
  projectLocation,
  clientAffiliatedAgency,
  yearCompleted,
  projectCostBudget,
  projectDesigner,
  description,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const [isLoaded, setIsLoaded] = useState(false);
  const [animationFlag1, setAnimationFlag1] = useState(false);
  const [animationFlag2, setAnimationFlag2] = useState(false);
  const [animationFlag3, setAnimationFlag3] = useState(false);

  // setAnimationFlag1(useDelayTransition(100));
  // setAnimationFlag2(useDelayTransition(500));
  // setAnimationFlag3(useDelayTransition(800));

  let images = pictures;

  useEffect(() => {
    // Object.values(images).forEach((picture) => {
    //   const img = new Image();
    //   img.src = picture;
    // });

    // cacheImages(Object.values(images));

    setIsLoaded(true);
    delayTransition(0).then((response) => setAnimationFlag1(response));
    delayTransition(500).then((response) => setAnimationFlag2(response));
    delayTransition(1200).then((response) => setAnimationFlag3(response));
  }, []);

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

  if (isLoaded) {
    return (
      <Grid container spacing={1} className={styles.root}>
        <Grow in={animationFlag1} timeout={800}>
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
                variant={!isMobile ? "dots" : "text"}
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
        </Grow>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={2}>
          <Grow in={animationFlag2} timeout={800}>
            <Card className={styles.card}>
              <CardHeader title="Project Info" className={styles.cardHeader} />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" className={styles.textPrimary}>
                      Project Name:
                    </Typography>
                    <Typography
                      variant="body1"
                      className={styles.textSecondary}
                    >
                      {projectName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" className={styles.textPrimary}>
                      Project Location:
                    </Typography>
                    <Typography
                      variant="body1"
                      className={styles.textSecondary}
                    >
                      {projectLocation}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" className={styles.textPrimary}>
                      Client/ Affiliated Agency:
                    </Typography>
                    <Typography
                      variant="body1"
                      className={styles.textSecondary}
                    >
                      {clientAffiliatedAgency}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" className={styles.textPrimary}>
                      Year Completed:
                    </Typography>
                    <Typography
                      variant="body1"
                      className={styles.textSecondary}
                    >
                      {yearCompleted}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" className={styles.textPrimary}>
                      Project Cost/Budget:
                    </Typography>
                    <Typography
                      variant="body1"
                      className={styles.textSecondary}
                    >
                      {projectCostBudget}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" className={styles.textPrimary}>
                      Project Designer:
                    </Typography>
                    <Typography
                      variant="body1"
                      className={styles.textSecondary}
                    >
                      {projectDesigner}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={animationFlag3} timeout={800}>
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
                  {description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grow>
        </Grid>
      </Grid>
    );
  } else {
    return <LoadingSpinner />;
  }
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

export default ProjectPage;
