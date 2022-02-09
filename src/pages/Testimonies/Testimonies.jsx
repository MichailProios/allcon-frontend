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

import george from "../../utilities/images/temp/georgeproios.jpg";
import markos from "../../utilities/images/temp/markobistakis.jpg";
import joseph from "../../utilities/images/temp/josephgrant.JPG";
import nick from "../../utilities/images/temp/nickgiannikouris.jpg";
import ahmed from "../../utilities/images/temp/ahmed.jpg";

const useStyles = makeStyles((theme) => ({
  companyProfileGrid: {
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

    width: "100%",
  },
  profileCardsGrid: {
    padding: "1em 10em 2em 10em",
    width: "100%",

    [theme.breakpoints.down("lg")]: {
      padding: "2em 8em 2em 8em",
    },

    [theme.breakpoints.down("md")]: {
      padding: "2em 4em 2em 4em",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "1em 1em 1em 1em",
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
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
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
            <Typography
              color="textPrimary"
              variant="h4"
              className={styles.text}
            >
              Testimonies
            </Typography>
          </Grow>
        </Grid>
      </Grid>
      <Slide direction="right" in={true} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(250)} timeout={800}>
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
      <Slide direction="right" in={true} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
      <Slide direction="right" in={true} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(250)} timeout={800}>
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
      <Slide direction="right" in={true} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(250)} timeout={800}>
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
      <Slide direction="right" in={true} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(250)} timeout={800}>
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
      <Slide direction="right" in={true} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(250)} timeout={800}>
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
      <Slide direction="right" in={true} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(250)} timeout={800}>
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
      <Slide direction="right" in={true} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(250)} timeout={800}>
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
      <Slide direction="right" in={true} timeout={1000}>
        <Divider />
      </Slide>
      <Grid
        container
        spacing={2}
        direction="column"
        className={styles.companyProfileGrid}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(250)} timeout={800}>
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
      {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProfileCard
            image={markos}
            title="Marko Bistakis"
            description="Since founding ALL•CON Contracting in 2001, Marko has grown the company from a small renovations company to a General Contracting company working on numerous high-profile projects for both public and private clients throughout the Tri State area."
            subtitle="President of Administration and Marketing"
            flag={useDelayTransition(1500)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProfileCard
            image={joseph}
            title="Joseph P. Grant"
            description="Joseph received his bachelor’s degree from the New York Institute of Technology and has almost 30 years of experience in architecture, construction management and general contracting. He is a registered Architect in eight states and has been involved in some of NYC’s largest projects."
            subtitle="Executive"
            flag={useDelayTransition(2000)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProfileCard
            image={pic}
            title="Nikolaos Giannikouris"
            description="Nick earned his Bachelor of Architecture Degree from The New York Institute of Technology. After earning his degree, Nick began managing a wide range of construction projects including restoration and construction projects for NYC Public Schools as well as an extensive amount of experience with Local Law 1198 compliance jobs."
            subtitle="Senior Project Manager"
            flag={useDelayTransition(2500)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProfileCard
            image={pic}
            title="Ahmed M Bassiouny"
            description="Ahmed received his Bachelor of Science in Civil Engineering from Alexandria University in Egypt and Project Management Diploma from North Carolina State University. After earning his degree, Ahmed began his career in construction as a project cost estimator where he obtained a unique insight in the interconnection of quality, cost, and project management play in the success of any given project."
            subtitle="Senior Project Manager"
            flag={useDelayTransition(3000)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProfileCard
            image={pic}
            title="Mohamed Elaasser"
            description="Mohamed earned his Bachelor of Science in Civil Engineering from Alexandria University in Egypt. After earning his degree, Mohamed began managing a wide range of construction projects throughout the world including Dubai, Muscat and New York."
            subtitle="Senior Project Manager"
            flag={useDelayTransition(3500)}
          />
        </Grid> */}
      {/* </Grid> */}
    </div>
  );
};
export default Testimonies;
