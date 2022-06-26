import React, { useState, useEffect, Suspense } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
import Box from "@material-ui/core/Box";
import { Divider, IconButton } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Fab from "@material-ui/core/Fab";

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
import ReactImage from "../ReactImage/ReactImage";
import useDetectHeight from "../../utilities/customHooks/useDetectHeight";
import getImageList from "../../utilities/customFunctions/getImageList";

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",
    // width: "100%",
  },
  picture: {
    userDrag: "none",
    userSelect: "none",
    // height: "45em",
  },
  carousel: {
    // width: "100%",
    position: "relative",
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
    height: "48px",
  },
  accordionHeader: {
    fontWeight: "bold",
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

  prevButton: {
    position: "absolute",

    top: "45%",
    left: theme.spacing(1),
    zIndex: "999",
  },

  nextButton: {
    position: "absolute",

    top: "45%",
    right: theme.spacing(1),
    zIndex: "999",
  },
}));

function slideRenderer(params, images, quality) {
  const { index, key } = params;

  return (
    <Picture key={key} image={Object.values(images)[index]} quality={quality} />
  );
}

const ProjectPage =
  ({
    pictures,
    quality,
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

    const [loading, setLoading] = useState(true);
    const [animationFlag1, setAnimationFlag1] = useState(false);
    const [animationFlag2, setAnimationFlag2] = useState(false);
    const [animationFlag3, setAnimationFlag3] = useState(false);

    // setAnimationFlag1(useDelayTransition(100));
    // setAnimationFlag2(useDelayTransition(500));
    // setAnimationFlag3(useDelayTransition(800));
    const height = useDetectHeight();
    useEffect(() => {
      delayTransition(0).then((response) => setAnimationFlag1(response));
      delayTransition(500).then((response) => setAnimationFlag2(response));
      delayTransition(1200).then((response) => setAnimationFlag3(response));
    }, []);

    // useEffect(() => {
    //   cacheImages(Object.values(pictures))
    //     .then(() => {
    //       setLoading(false);
    //     })
    //     .catch(() => {
    //       setLoading(true);
    //     });
    // }, [pictures]);
    const [activeStep, setActiveStep] = useState(0);
    const [payloadPictures, setPayloadPictures] = useState({});
    const [maxSteps, setMaxSteps] = useState();

    useEffect(() => {
      getImageList(pictures).then((payload) => {
        setMaxSteps(Object.values(payload).length);
        setPayloadPictures(payload);

        setLoading(false);
      });
    }, [pictures]);

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
            duration: 400,
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

    if (!loading) {
      return (
        <div className={styles.root}>
          <Grid container spacing={1}>
            <Grow in={animationFlag1} timeout={800}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={10}>
                <Paper elevation={2} className={styles.carousel}>
                  <VirtualizeSwipeableViews
                    className={styles.views}
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents={false}
                    slideRenderer={(params) =>
                      slideRenderer(
                        params,
                        Object.values(payloadPictures),
                        quality
                      )
                    }
                    overscanSlideAfter={3}
                    overscanSlideBefore={3}
                    disableLazyLoading={true}
                    slideCount={maxSteps}
                    animateTransitions={true}
                  />

                  <Fab
                    color="primary"
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    className={styles.prevButton}
                  >
                    <KeyboardArrowLeft style={{ color: "#fff" }} />
                  </Fab>

                  <Fab
                    color="primary"
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                    className={styles.nextButton}
                  >
                    <KeyboardArrowRight style={{ color: "#fff" }} />
                  </Fab>

                  <MobileStepper
                    className={styles.stepper}
                    steps={maxSteps}
                    position="static"
                    variant={!isMobile ? "dots" : "text"}
                    activeStep={activeStep}
                    backButton={<div />}
                    nextButton={<div />}
                    // nextButton={
                    //   <Button
                    //     variant="contained"
                    //     color="primary"
                    //     size="small"
                    //     onClick={handleNext}
                    //     disabled={activeStep === maxSteps - 1}
                    //   >
                    //     Next
                    //     {theme.direction === "rtl" ? (
                    //       <KeyboardArrowLeft />
                    //     ) : (
                    //       <KeyboardArrowRight />
                    //     )}
                    //   </Button>
                    // }
                    // backButton={
                    //   <Button
                    //     variant="contained"
                    //     color="primary"
                    //     size="small"
                    //     onClick={handleBack}
                    //     disabled={activeStep === 0}
                    //   >
                    //     {theme.direction === "rtl" ? (
                    //       <KeyboardArrowRight />
                    //     ) : (
                    //       <KeyboardArrowLeft />
                    //     )}
                    //     Back
                    //   </Button>
                    // }
                  />
                </Paper>
              </Grid>
            </Grow>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={2}>
              <Grow in={animationFlag2} timeout={800}>
                <Card style={{ height: `calc(${height}px - 154px)` }}>
                  <CardHeader
                    title="Project Info"
                    className={styles.cardHeader}
                  />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h6" className={styles.textPrimary}>
                          Project Name
                        </Typography>
                        <Typography
                          color="primary"
                          variant="body1"
                          className={styles.textSecondary}
                        >
                          {projectName}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h6" className={styles.textPrimary}>
                          Project Location
                        </Typography>
                        <Typography
                          color="primary"
                          variant="body1"
                          className={styles.textSecondary}
                        >
                          {projectLocation}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h6" className={styles.textPrimary}>
                          Client/ Affiliated Agency
                        </Typography>
                        <Typography
                          color="primary"
                          variant="body1"
                          className={styles.textSecondary}
                        >
                          {clientAffiliatedAgency}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h6" className={styles.textPrimary}>
                          Year Completed
                        </Typography>
                        <Typography
                          color="primary"
                          variant="body1"
                          className={styles.textSecondary}
                        >
                          {yearCompleted}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h6" className={styles.textPrimary}>
                          Project Cost/Budget
                        </Typography>
                        <Typography
                          color="primary"
                          variant="body1"
                          className={styles.textSecondary}
                        >
                          {projectCostBudget}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h6" className={styles.textPrimary}>
                          Project Designer
                        </Typography>
                        <Typography
                          color="primary"
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
        </div>
      );
    } else {
      return (
        <div style={{ height: `calc(${height}px - 65px)` }}>
          <LoadingSpinner />
        </div>
      );
    }
  }
;

const Picture = ({ image, quality }) => {
  const styles = useStyles();
  const theme = useTheme();

  const height = useDetectHeight();

  return (
    <Paper
      style={{
        height: `calc(${height}px - 202px)`,
        overflow: "hidden",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
      }}
    >
      <MuiImage
        imageStyle={{
          width: "100%",
          height: `calc(${height}px - 202px)`,
          objectFit: "contain",
        }}
        // cover={true}
        iconContainerStyle={{ height: `calc(${height}px - 202px)` }}
        // iconContainerStyle={{
        //   maxWidth: "100%",
        //   height: "45em",
        // }}

        animationDuration={800}
        disableTransition={false}
        src={
          `https://allconcontracting.com/image-resizing?&quality=${quality}&image=` +
          image
        }
        className={styles.picture}
      />
    </Paper>
  );
};

export default ProjectPage;
