import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import pic from "../../utilities/images/Logos/test.jpg";

import { Typography, Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  homeContainer: {
    overflow: "hidden",
  },
  picture: {
    width: "100%",
    height: "auto",
    position: "fixed",
    top: 0,
    left: 0,
  },
  quote: {
    margin: 0,
    position: "absolute",
    top: "80%",
    left: "30%",
    transform: "translate(-50%, -50%)",
    userSelect: "none",
    wordWrap: "break-word",
    textAlign: "center",
    color: "#f3f3f3",
  },
}));

function Home() {
  const styles = useStyles();
  return (
    <div className={styles.homeContainer}>
      <img className={styles.picture} src={pic} alt="logo" />
      <Fade in={true} timeout={2000}>
        <Typography variant="h4" className={styles.quote}>
          Infinite Possibilities through Integrated Solutions
        </Typography>
      </Fade>
    </div>
  );
}

export default Home;
