import React, { useState, useEffect } from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import { Grid, Typography, Grow, Slide, Divider } from "@material-ui/core";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

const useStyles = makeStyles({
  root: {
    margin: "2em 10em 2em 10em",
    width: "auto",
  },
  //header: { fontWeight: "600" },
  profile: { marginTop: "0.5em" },
});

const About = () => {
  const styles = useStyles();

  const [fade1, setFade1] = useState(false);
  const [fade2, setFade2] = useState(false);
  const [fade3, setFade3] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFade1(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setFade2(true);
    }, 2000);

    const timer3 = setTimeout(() => {
      setFade3(true);
    }, 3000);
    return () => (
      clearTimeout(timer1), clearTimeout(timer2), clearTimeout(timer3)
    );
  }, []);

  return (
    <div>
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
          <Grow in={useDelayTransition(50)} timeout={800}>
            <Typography color="textPrimary" variant="h4">
              Company Profile
            </Typography>
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

      <ProfileCard
        image={"https://picsum.photos/500"}
        timeout={800}
        flag={useDelayTransition(1000)}
      />
      <ProfileCard
        image={"https://picsum.photos/500"}
        timeout={800}
        flag={useDelayTransition(2000)}
      />
      <ProfileCard
        image={"https://picsum.photos/500"}
        timeout={800}
        flag={useDelayTransition(3000)}
      />
    </div>
  );
};
export default About;
