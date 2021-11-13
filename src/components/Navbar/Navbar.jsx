//Basic dependencies
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
  Grid,
  Divider,
  Slide,
  useScrollTrigger,
  Zoom,
  Fab,
} from "@material-ui/core";
import PropTypes from "prop-types";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

//Pictures and Icons
import companyLogo from "../../utilities/images/Logos/logo-new.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: "0.4em",
    height: "auto",
    width: "3.2em",
  },
  companyName: {
    margin: "0.8em 0.6em 0.6em 0.2em",
    letterSpacing: "0.1em",
    fontSize: "1.3em",
    fontSmooth: "5em",
    fontFamily: "EB Garamond , serif",
    color: "black",
    userSelect: "none",
    userDrag: "none",
  },
  appbar: {
    backgroundColor: "#fff",
    position: "fixed",
  },

  button: {
    userDrag: "none",
    userSelect: "none",
    margin: "1.1em 1em 1.1em 1em",
  },
  links: {
    textDecoration: "none",
  },
  buttongrid: {
    marginRight: "4em",
  },
  fab: {
    position: "fixed",
    zIndex: 1,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const styles = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={styles.fab}>
        {children}
      </div>
    </Zoom>
  );
}

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const styles = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar className={styles.appbar} elevation={0}>
          <Toolbar classname={styles.toolbar}>
            <Grid justify={"space-between"} container>
              <Grid item>
                <Grid justify={"space-between"} container>
                  <img className={styles.logo} src={companyLogo} alt="logo" />
                  <Typography className={styles.companyName}>
                    ALL•CON Contracting
                  </Typography>
                </Grid>
              </Grid>
              <Grid className={styles.buttongrid} item>
                <Grid justify={"space-between"} container>
                  <Button component={Link} to="/home" className={styles.button}>
                    Home
                  </Button>

                  <Button component={Link} to="/home" className={styles.button}>
                    About
                  </Button>

                  <Button
                    component={Link}
                    to="/projects"
                    className={styles.button}
                  >
                    Projects
                  </Button>
                  <Button component={Link} to="/home" className={styles.button}>
                    Testimonies
                  </Button>
                  <Button component={Link} to="/home" className={styles.button}>
                    Contacts
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          <Divider />
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <ScrollTop>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Navbar;
