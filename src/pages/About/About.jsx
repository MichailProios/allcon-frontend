import React from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import { Grid, Typography, Grow, Divider } from "@material-ui/core";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

const useStyles = makeStyles({
  root: {
    margin: "2em 10em 2em 10em",
    width: "auto",
  },
  header: { fontWeight: "600" },
  profile: { marginTop: "0.5em" },
});

const About = () => {
  const styles = useStyles();

  return (
    <div styles={{ width: "100%" }}>
      <Grid container spacing={2} direction="column" className={styles.root}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={styles.header}
        >
          <Grow in={true} timeout={300}>
            <Typography variant="h4">Company Profile</Typography>
          </Grow>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={10}
          xl={12}
          className={styles.profile}
        >
          <Grow in={true} timeout={800}>
            <Typography variant="h6">
              Founded in 2001, Allcon Contracting Corporation and its owners
              Marko Bistakis and George Proios have a solid reputation in the
              tri-state area for producing and delivering high-quality
              construction projects.
              <br />
              <br />
            </Typography>
          </Grow>
          <Grow in={true} timeout={1200}>
            <Typography variant="h6">
              Allcon Contracting provides a full range of construction services.
              We offer quality work at affordable pricing. Our staff at Allcon
              Contracting brings complete teamwork to oversee every project. The
              owners are hands on and involved to make sure all projects are
              completed on time and on the budget.
              <br /> At Allcon Contracting we are meticulous about the work we
              do. We continually thrive to go the extra mile and deliver quality
              results.
              <br />
              <br />
            </Typography>
          </Grow>
          <Grow in={true} timeout={1600}>
            <Typography variant="h6">
              Our staff of professionals each have the knowledge to manage any
              assignment that is put in front of them. From architects,
              planners, designers, and construction specialists everyone works
              in a collaborative environment bringing forth their unique talent
              and techniques.
              <br />
              <br />
            </Typography>
          </Grow>
          <Grow in={true} timeout={2000}>
            <Typography variant="h6">
              We are all fully committed to innovation and excellence in our
              pursuit to exceed our client expectations.
            </Typography>
          </Grow>
        </Grid>
      </Grid>
      <Divider />
      <ProfileCard image={"https://picsum.photos/500"} />
    </div>
  );
};
export default About;
