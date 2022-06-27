import React, { useState, useEffect, Suspense } from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import {
  Grid,
  Typography,
  Grow,
  Slide,
  Divider,
  Paper,
  Fade,
} from "@material-ui/core";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";
import ReactImage from "../../components/ReactImage/ReactImage";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import cacheImages from "../../utilities/customFunctions/cacheImages";
import imagesImport from "../../utilities/customFunctions/imagesImport";
import { isMobile } from "react-device-detect";

import MuiImage from "material-ui-image";

import useDetectHeight from "../../utilities/customHooks/useDetectHeight";
import LoadingSquares from "../../components/LoadingSquares/LoadingSquares";

// const images = imagesImport(
//   require.context(
//     "D:/Websites/Pictures/Projects/temp",
//     false,
//     /\.(JPG|PNG|png|jpe?g|svg)$/
//   )
// );
const pic =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Logos/logo-new.png";

const george =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-24.jpg";
const markos =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-19.jpg";

const joseph =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-23.jpg";
const nick =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-16.jpg";
const ahmed =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-28.jpg";
const sandra =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-14.jpg";
const tina =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-13.jpg";
const wahid =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-12.jpg";
const ana =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-27.jpg";

const company =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-8.jpg";

const useStyles = makeStyles((theme) => ({
  companyProfileGrid: {
    padding: "2em 10em 2em 10em",
    [theme.breakpoints.down("lg")]: {
      padding: "2em 8em 2em 8em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "2em 8em 2em 8em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1em 1em 1em",
    },
  },
  paper: {
    marginTop: "2em",
    height: "auto",
    width: "auto",
    margin: "0 auto",
  },

  profileCardsGrid: {
    padding: "2em 10em 2em 10em",
    [theme.breakpoints.down("lg")]: {
      padding: "2em 8em 2em 8em",
    },
    [theme.breakpoints.down("md")]: {
      padding: "2em 8em 2em 8em",
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

  const height = useDetectHeight();

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
    },
    {
      link: "/About/NikolaosGiannikouris",
      image: nick,
      title: "Nikolaos Giannikouris",
      subtitle: "Senior Project Manager",
      description: `Nick earned his Bachelor of Architecture Degree from The New York Institute of Technology.
                    After earning his degree, Nick began managing a wide range of construction projects including
                    restoration and construction projects for NYC Public Schools as well as an extensive amount of experience with Local Law 1198 compliance jobs.`,
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
    },
    {
      link: "/About/MohamedElaasser",
      image: pic,
      title: "Mohamed Elaasser",
      subtitle: "Senior Project Manager",
      description: `Mohamed earned his Bachelor of Science in Civil Engineering from Alexandria University in Egypt.
                    After earning his degree, Mohamed began managing a wide range of construction projects throughout
                    the world including Dubai, Muscat and New York.`,
    },
    {
      link: "/About/SandraDias",
      image: sandra,
      title: "Sandra Dias",
      subtitle: "Office Manager",
      description: `Since joining ALL•CON in 2015 Sandra has developed affective and efficient intra-office communications protocols. 
                    As Office Manager, she utilizes her organizational skills to streamline our administrative procedures, increase our efficiency and enhance the company’s safety protocols.`,
    },
    {
      link: "/About/TinaRichusa",
      image: tina,
      title: "Tina Richusa",
      subtitle: "Office Administrator",
      description: `In 2018 Tina joined ALL•CON in charge of day-to-day activities to support our employees and ensure client satisfaction. 
                Tina makes sure ALL•CON staff have all the necessary tools and resources required to assure our projects are always delivered with top quality.`,
    },
    {
      link: "/About/StavrosGiannopoulos",
      image: pic,
      title: "Stavros Giannopoulos",
      subtitle: "Staff Accountant",
      description: `Stavros runs the Accounting Department at ALL•CON and is responsible for overseeing all activities from maintaining and reviewing all financial accounts and statements to preparing financial reporting.
                    Since 2014, he has been assisting with all financial audits, developing budgeting procedures for ALL•CON and maintaining and reconciling yearly accounts.`,
    },
    {
      link: "/About/WahidWahab",
      image: wahid,
      title: "Wahid Wahab",
      subtitle: "Senior Estimator",
      description: `As Senior Estimator Wahid is responsible prepares all cost estimates for planned construction projects. In 2019, he was brought into the ALL•CON family because of his ability to work closely with owners’ representatives, designers, vendors, and subcontractors to best determine the overall cost of a project and generate quality takeoffs. 
                  His ability to keep up to date with current technologies and construction methodologies is a critical component to ALL•CON being able to provide accurate and precise project pricing. `,
    },
    {
      link: "/About/AnaVillarrubia",
      image: ana,
      title: "Ana Villarrubia",
      subtitle: "Estimator",
      description: `Ana received her BS in Construction Management/Engineering Technology from the State University at Farmingdale and is a vital member of the Estimating Team at ALL•CON. 
                    Her proficiency in AUTOCAD, Procore and Bluebeam along with an eye towards detail and the ability to read blueprints gives her a unique capability to perform accurate project take offs and generate qualified bids. `,
    },
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cacheImages([
      george,
      markos,
      joseph,
      nick,
      ahmed,
      sandra,
      tina,
      wahid,
      ana,
      company,
    ])
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  }, []);

  if (!loading) {
    return (
      <div style={{ width: "100%" }}>
        <Grid
          container
          // spacing={2}
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
            <Grow
              in={true}
              style={{
                // transformOrigin: "0 0 0",
                transitionDelay: `${`150`}ms`,
              }}
              timeout={{ appear: 0, enter: 800 }}
            >
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
            style={{ justifySelf: "center", paddingTop: "1.5em" }}
          >
            <Grow
              in={true}
              style={{
                // transformOrigin: "0 0 0",
                transitionDelay: `${`250`}ms`,
              }}
              timeout={{ appear: 0, enter: 800 }}
            >
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
            <Grow
              // in={useDelayTransition(250)}
              in={true}
              style={{
                // transformOrigin: "0 0 0",
                transitionDelay: `${`350`}ms`,
              }}
              timeout={{ appear: 0, enter: 800 }}
            >
              <Typography
                color="textPrimary"
                variant="h6"
                className={styles.text}
              >
                Our Executive Management understands that teamwork, which
                includes hands on involvement of the owners, guarantee that all
                projects are completed on time and on the budget. AllCon's staff
                is always meticulous with details of each project and
                continually thrives to go the extra mile and deliver quality
                results. From architects, planners, designers, and construction
                specialists everyone works in a collaborative environment
                bringing forth their unique talent and techniques.
                <br />
                <br />
              </Typography>
            </Grow>
            <Grow
              in={true}
              style={{
                // transformOrigin: "0 0 0",
                transitionDelay: `${`450`}ms`,
              }}
              timeout={{ appear: 0, enter: 800 }}
            >
              <Typography
                color="textPrimary"
                variant="h6"
                className={styles.text}
              >
                With a goal to "build it once and build it right" we use
                innovative solutions to achieve infinite possibilities for each
                project.
                <br />
              </Typography>
            </Grow>
            <Fade
              in={true}
              style={{
                // transformOrigin: "0 0 0",
                transitionDelay: `${`550`}ms`,
              }}
              timeout={800}
            >
              <Paper className={styles.paper}>
                <Suspense
                  fallback={
                    <div style={{ height: "100%" }}>
                      <LoadingSpinner />
                    </div>
                  }
                >
                  <ReactImage
                    image={company}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "6px",
                      display: "block",
                      lineHeight: 0,
                    }}
                    className={styles.media}
                  />
                </Suspense>
              </Paper>
            </Fade>
          </Grid>
        </Grid>
        <Slide direction="right" in={true} timeout={1000}>
          <Divider />
        </Slide>

        <Grid
          container
          // spacing={2}
          direction="row"
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
            <Grow
              in={true}
              style={{
                // transformOrigin: "0 0 0",
                transitionDelay: `${`650`}ms`,
              }}
              timeout={{ appear: 0, enter: 800 }}
            >
              <Typography color="primary" variant="h4" className={styles.text}>
                Executives
              </Typography>
            </Grow>
          </Grid>
          {listData.map((value, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              key={index}
              style={{ paddingTop: "1.5em" }}
            >
              <ProfileCard
                picture={value.image}
                title={value.title}
                subtitle={value.subtitle}
                description={value.description}
                link={value.link}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  } else {
    return (
      <div style={{ height: `calc(${height}px - 65px)` }}>
        <LoadingSquares />
      </div>
    );
  }
};
export default About;
