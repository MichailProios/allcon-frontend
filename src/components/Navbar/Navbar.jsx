//Basic dependencies
import React, { useState } from "react";
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
  Tabs,
  Tab,
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
    margin: "1em 0.6em 0.6em 0.2em",
    letterSpacing: "0.1em",
    fontSize: "1.2em",
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
    margin: "0.6em 0em 0em 0em",
    color: "black",
    minWidth: 120,
    width: 120,
    borderRadius: "0.2em",
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

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                <Tabs value={value} onChange={handleChange}>
                  <Tab
                    component={Link}
                    to="/home"
                    className={styles.button}
                    label="Home"
                  />
                  <Tab
                    component={Link}
                    to="/about"
                    className={styles.button}
                    label="About"
                  />

                  <Tab
                    component={Link}
                    to="/projects"
                    className={styles.button}
                    label="Projects"
                  />

                  <Tab
                    component={Link}
                    to="/home"
                    className={styles.button}
                    label="Testimonies"
                  />

                  <Tab
                    component={Link}
                    to="/home"
                    className={styles.button}
                    label="Contacts"
                  />
                </Tabs>
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
