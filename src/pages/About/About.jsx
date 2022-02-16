import React, { useState, useEffect } from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import {
  Grid,
  Typography,
  Grow,
  Slide,
  Divider,
  Paper,
} from "@material-ui/core";

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

import MuiImage from "material-ui-image";

import pic from "../../utilities/images/Logos/logo-new.png";

import george from "../../utilities/images/temp/2-7-2022-74.jpg";
import markos from "../../utilities/images/temp/2-7-2022-59.jpg";
import joseph from "../../utilities/images/temp/josephgrant.JPG";
import nick from "../../utilities/images/temp/nickgiannikouris.jpg";
import ahmed from "../../utilities/images/temp/ahmed.jpg";

import company from "../../utilities/images/temp/2-7-2022-80.jpg";

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
  paper: {
    marginTop: "2em",
    height: "auto",
    width: "auto",
    margin: "0 auto",
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

const About = () => {
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

  const [listData, setListData] = useState([
    {
      link: "/About/GeorgeProios",
      image: george,
      title: "George Proios",
      subtitle: "President of Operations",
      description: `George received his BA in Economics and Business 
                    from UMASS Boston and his MBA from the Arthur D. Little Management Education Institute.
                    During that time, he learned from leading consultants how to build a top-notch team and 
                    lead the way with innovation and proactive team management. `,
      delay: 1000,
    },
    {
      link: "/About/MarkoBistakis",
      image: markos,
      title: "Marko Bistakis",
      subtitle: "President of Administration and Marketing",
      description: `Since founding ALL•CON Contracting in 2001,
                   Marko has grown the company from a small renovations company to a General 
                   Contracting company working on numerous high-profile 
                   projects for both public and private clients throughout the Tri State area.`,
      delay: 1100,
    },
    {
      link: "/About/JosephGrant",
      image: joseph,
      title: "Joseph Grant",
      subtitle: "Executive",
      description: `Joseph received his bachelor’s degree from 
                    the New York Institute of Technology and has almost 30
                    years of experience in architecture, construction 
                    management and general contracting. He is a 
                    Architect in eight states and has been involved 
                    in some of NYC’s largest projects.`,
      delay: 1200,
    },
    {
      link: "/About/NikolaosGiannikouris",
      image: nick,
      title: "Nikolaos Giannikouris",
      subtitle: "Senior Project Manager",
      description: `Nick earned his Bachelor of Architecture Degree from The New York Institute of Technology.
                    After earning his degree, Nick began managing a wide range of construction projects including
                    restoration and construction projects for NYC Public Schools as well as an extensive amount of experience with Local Law 1198 compliance jobs.`,
      delay: 1300,
    },
    {
      link: "/About/AhmedBassiouny",
      image: ahmed,
      title: "Ahmed M Bassiouny",
      subtitle: "Senior Project Manager",
      description: `Ahmed received his Bachelor of Science in Civil Engineering from Alexandria University in Egypt 
                    and Project Management Diploma from North Carolina State University. After earning his degree, 
                    Ahmed began his career in construction as a project cost estimator where he obtained a unique 
                    insight in the interconnection of quality, cost, and project management play in the success of any given project.`,
      delay: 1400,
    },
    {
      link: "/About/MohamedElaasser",
      image: pic,
      title: "Mohamed Elaasser",
      subtitle: "Senior Project Manager",
      description: `Mohamed earned his Bachelor of Science in Civil Engineering from Alexandria University in Egypt. 
                    After earning his degree, Mohamed began managing a wide range of construction projects throughout
                    the world including Dubai, Muscat and New York.`,
      delay: 1500,
    },
  ]);

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
            <Typography color="primary" variant="h4" className={styles.text}>
              Company Profile
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
          style={{ justifySelf: "center" }}
        >
          <Grow in={useDelayTransition(150)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              ALL•CON Contracting is built on a reputation of delivering high
              quality projects serving a variety of private and public clients
              throughout New York State.
              <br />
              <br />
            </Typography>
          </Grow>
          <Grow in={useDelayTransition(250)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              Our Executive Management understands that teamwork, which includes
              hands on involvement of the owners, guarantee that all projects
              are completed on time and on the budget. AllCon's staff is always
              meticulous with details of each project and continually thrives to
              go the extra mile and deliver quality results. From architects,
              planners, designers, and construction specialists everyone works
              in a collaborative environment bringing forth their unique talent
              and techniques.
              <br />
              <br />
            </Typography>
          </Grow>
          <Grow in={useDelayTransition(350)} timeout={800}>
            <Typography
              color="textPrimary"
              variant="h6"
              className={styles.text}
            >
              With a goal to "built it once and build it right" we use
              innovative solutions to achieve infinite possibilities for each
              project.
              <br />
            </Typography>
          </Grow>
          <Grow in={useDelayTransition(450)} timeout={800}>
            <Paper className={styles.paper}>
              <MuiImage
                imageStyle={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "6px",
                }}
                cover={true}
                aspectRatio={1.5}
                animationDuration={800}
                src={company}
                style={{
                  borderRadius: "6px",
                }}
              />
            </Paper>
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
        className={styles.profileCardsGrid}
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
          <Grow in={useDelayTransition(500)} timeout={800}>
            <Typography color="primary" variant="h4" className={styles.text}>
              Executives
            </Typography>
          </Grow>
        </Grid>
        {listData.map((value, index) => (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key={index}>
            <ProfileCard
              image={value.image}
              title={value.title}
              subtitle={value.subtitle}
              description={value.description}
              delay={value.delay}
              link={value.link}
            />
          </Grid>
        ))}
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
      </Grid>
    </div>
  );
};
export default About;
