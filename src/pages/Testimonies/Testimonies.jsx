import React, { useState, useEffect } from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import { Grid, Typography, Grow, Slide, Divider } from "@material-ui/core";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";
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

import pic from "../../utilities/images/Logos/logo-new.png";

const useStyles = makeStyles((theme) => ({
  testimoniesGridHeader: {
    padding: "2em 10em 0em 10em",

    [theme.breakpoints.down("lg")]: {
      padding: "2em 8em 0em 8em",
    },

    [theme.breakpoints.down("md")]: {
      padding: "2em 4em 0em 4em",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2em 1em 0em 1em",
    },
  },

  testimoniesGrid: {
    padding: "2em 10em 2em 10em",

    [theme.breakpoints.down("lg")]: {
      padding: "2em 8em 2em 8em",
    },

    [theme.breakpoints.down("md")]: {
      padding: "2em 4em 2em 4em",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2em 1em 2em 1em",
    },
  },

  text: {
    userSelect: "none",
    userDrag: "none",
  },
}));

const Testimonies = () => {
  const styles = useStyles();

  // useEffect(() => {
  //   if (isMobile) {
  //     scroll.scrollToTop({
  //       duration: 800,
  //       delay: 150,
  //       smooth: "easeInOutQuart",
  //     });
  //   } else {
  //     scroll.scrollToTop({
  //       duration: 0,
  //       delay: 150,
  //       smooth: "easeInOutQuart",
  //     });
  //   }
  // }, []);

  return (
    <div>
      <Grid
        container
        // spacing={2}
        direction="column"
        className={styles.testimoniesGrid}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={styles.header}
        >
          <Grow in={useDelayTransition(50)} timeout={800}>
            <Typography color="primary" variant="h4" className={styles.text}>
              Testimonies
            </Typography>
          </Grow>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{ paddingTop: "1.5em" }}
        >
          <Grow in={useDelayTransition(250)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              “Your gift of supplies for the renovation of AHRC’s Astoria’s Blue
              Feather Head Start program helped improve the educational
              experience for many small children who face big challenges every
              day.”
              <br /> <br />
              Pamela Richard, Director of Development – AHRC New York
            </Typography>
          </Grow>
        </Grid>
      </Grid>

      <Slide direction="right" in={useDelayTransition(350)} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        // spacing={2}
        direction="column"
        className={styles.testimoniesGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(350)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              “At the end of the day, I knew exactly what I was paying for –
              without hidden costs or add-ons – and I was extremely satisfied
              with the results”
              <br /> <br />
              Edward L. Rose – Apt 53B Client
            </Typography>
          </Grow>
        </Grid>
      </Grid>
      <Slide direction="right" in={useDelayTransition(450)} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        // spacing={2}
        direction="column"
        className={styles.testimoniesGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(450)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              “We appreciate your contribution of the utility and storage
              building for the students at Mepham High School.”
              <br /> <br />
              Nancy Kaplan, Ed.D., President, Board of Education – Bellmore
              Merrick Central Highschool District
            </Typography>
          </Grow>
        </Grid>
      </Grid>
      <Slide direction="right" in={useDelayTransition(550)} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        // spacing={2}
        direction="column"
        className={styles.testimoniesGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(550)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              “Most contractors I’ve worked with are usually focused on the next
              job as they are working on the current one. This is definitely not
              the case with ALL CON….anyone who chooses to work with them will
              be very happy and extremely satisfied with the experience and
              results.”
              <br /> <br />
              Barry H. Greene, Cooperative President – 20 East 9th St.
            </Typography>
          </Grow>
        </Grid>
      </Grid>
      <Slide direction="right" in={useDelayTransition(650)} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        // spacing={2}
        direction="column"
        className={styles.testimoniesGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(650)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              “The workmanship was excellent, and the crew was extremely
              professional. I would not hesitate recommending your company to
              others.”
              <br /> <br />
              Kim Zdrill, FSA, MAAA – Berry St.
            </Typography>
          </Grow>
        </Grid>
      </Grid>
      <Slide direction="right" in={useDelayTransition(750)} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        // spacing={2}
        direction="column"
        className={styles.testimoniesGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(750)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              “The crew did a wonderful job…promptly, efficiently,
              helpfully….and exceptionally. I heartily recommend ALLCON
              Contracting.”
              <br /> <br />
              Roberta Sandemen – 470 Park Avenue
            </Typography>
          </Grow>
        </Grid>
      </Grid>
      <Slide direction="right" in={useDelayTransition(850)} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        // spacing={2}
        direction="column"
        className={styles.testimoniesGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(850)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              “The employees are extremely professional. All work performed has
              been first-rate. I use this company almost exclusively for any
              construction related work.”
              <br /> <br />
              Terri S. Triades - MERI TRIADES
            </Typography>
          </Grow>
        </Grid>
      </Grid>
      <Slide direction="right" in={useDelayTransition(950)} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        // spacing={2}
        direction="column"
        className={styles.testimoniesGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(950)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              “We found ALLCON to be completely reliable and dependable. They
              bring projects in on time and on budget.”
              <br /> <br />
              Alex Arker – The Arker Companies Real Estate Development
            </Typography>
          </Grow>
        </Grid>
      </Grid>
      <Slide direction="right" in={useDelayTransition(1100)} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        // spacing={2}
        direction="column"
        className={styles.testimoniesGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(1100)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              I recommend ALLCON Contracting because they are reliable,
              responsive, and dependable.”
              <br /> <br />
              Lenard Thylan – Thylan Associates Inc. Real Estate and Corporate
              Finance
            </Typography>
          </Grow>
        </Grid>
      </Grid>
    </div>
  );
};
export default Testimonies;
