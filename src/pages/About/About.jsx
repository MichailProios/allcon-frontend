import React, { useState, useEffect } from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import { Grid, Typography, Grow, Slide, Divider } from "@material-ui/core";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

import pic from "../../utilities/images/Logos/logo-new.png";

const useStyles = makeStyles({
  companyProfileGrid: {
    padding: "2em 10em 2em 10em",
    width: "100%",
  },
  profileCardsGrid: {
    padding: "1em 10em 2em 10em",
    width: "100%",
  },
});

const About = () => {
  const styles = useStyles();

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
            <Typography color="textPrimary" variant="h4">
              Company Profile
            </Typography>
          </Grow>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grow in={useDelayTransition(150)} timeout={800}>
            <Typography color="textPrimary" variant="h6">
              ALL•CON Contracting is built on a reputation of delivering high
              quality projects serving a variety of private and public clients
              throughout New York State.
              <br />
              <br />
            </Typography>
          </Grow>
          <Grow in={useDelayTransition(250)} timeout={800}>
            <Typography color="textPrimary" variant="h6">
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
            <Typography color="textPrimary" variant="h6">
              With a goal to "built it once and build it right" we use
              innovative solutions to achieve infinite possibilities for each
              project.
              <br />
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
          <Grow in={useDelayTransition(700)} timeout={800}>
            <Typography color="textPrimary" variant="h4">
              Executives
            </Typography>
          </Grow>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProfileCard
            image={pic}
            title="George Proios"
            description="Integer suscipit congue diam id pharetra. Donec et elementum purus. Aenean auctor nec felis eu eleifend. Pellentesque egestas interdum tortor sit amet porttitor. Fusce sed turpis at urna molestie feugiat. Donec euismod elit semper lectus pellentesque, id convallis lectus eleifend. Morbi ultricies varius arcu vitae bibendum. Nullam dictum felis vel consectetur iaculis."
            subtitle="President of Operations"
            timeout={800}
            flag={useDelayTransition(1000)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProfileCard
            image={pic}
            title="Marko Bistakis"
            description="Integer suscipit congue diam id pharetra. Donec et elementum purus. Aenean auctor nec felis eu eleifend. Pellentesque egestas interdum tortor sit amet porttitor. Fusce sed turpis at urna molestie feugiat. Donec euismod elit semper lectus pellentesque, id convallis lectus eleifend. Morbi ultricies varius arcu vitae bibendum. Nullam dictum felis vel consectetur iaculis."
            subtitle="President of Administration and Marketing"
            timeout={800}
            flag={useDelayTransition(1500)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProfileCard
            image={pic}
            title="Joseph P. Grant"
            description="Integer suscipit congue diam id pharetra. Donec et elementum purus. Aenean auctor nec felis eu eleifend. Pellentesque egestas interdum tortor sit amet porttitor. Fusce sed turpis at urna molestie feugiat. Donec euismod elit semper lectus pellentesque, id convallis lectus eleifend. Morbi ultricies varius arcu vitae bibendum. Nullam dictum felis vel consectetur iaculis."
            subtitle="Executive"
            timeout={800}
            flag={useDelayTransition(2000)}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default About;
