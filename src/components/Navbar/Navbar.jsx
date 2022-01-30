//Basic dependencies
import React, { useState, useEffect } from "react";
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
  Tooltip,
} from "@material-ui/core";

import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

//Pictures and Icons
import companyLogo from "../../utilities/images/Logos/logo-new.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: "0.4em",
    height: "auto",
    width: "3.2em",
    userDrag: "none",
  },
  companyName: {
    margin: "1em 0.6em 0.6em 0.2em",
    letterSpacing: "0.1em",
    fontSize: "1.2em",
    fontSmooth: "5em",
    fontFamily: "EB Garamond , serif",
    color: "black",
    textDecoration: "none",
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

  buttongrid: {
    marginRight: "4em",
  },
  fab: {
    position: "fixed",
    zIndex: 1,
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
  appbarLinks: {
    textDecoration: "none",
    //color: "#fff",
    userDrag: "none",
    display: "flex",
    flexDirection: "row",
  },
  loading: {
    zIndex: theme.zIndex.drawer + 5,
    height: "0.18em",
  },
  backFAB: {
    position: "fixed",
    zIndex: 1,
    bottom: theme.spacing(1),
    left: theme.spacing(1),
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

function BackFAB() {
  const styles = useStyles();
  const navigate = useNavigate();

  const [showFlag, setShowFlag] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const pathnames = location.pathname;

    if (pathnames.startsWith("/Projects/".toLowerCase())) {
      setShowFlag(true);
    } else {
      setShowFlag(false);
    }
  }, [location]);

  return (
    <Zoom in={showFlag}>
      <Fab
        color="secondary"
        size="small"
        className={styles.backFAB}
        onClick={() => navigate(-1)}
      >
        <KeyboardArrowLeftIcon />
      </Fab>
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
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const pathnames = location.pathname.toLowerCase();

    switch (true) {
      case pathnames === "/":
        setValue(0);
        break;
      case pathnames.startsWith("/home"):
        setValue(0);
        break;
      case pathnames.startsWith("/about"):
        setValue(1);
        break;
      case pathnames.startsWith("/projects"):
        setValue(2);
        break;
      case pathnames.startsWith("/testimonies"):
        setValue(3);
        break;
      case pathnames.startsWith("/contacts"):
        setValue(4);
        break;
      default:
        break;
    }
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar className={styles.appbar} elevation={0}>
          <Toolbar className={styles.toolbar}>
            <Grid justifyContent={"space-between"} container>
              <Grid item>
                <Grid justifyContent={"space-between"} container>
                  <Tooltip title="Home" placement="right">
                    <Link to="/Home" className={styles.appbarLinks}>
                      <img
                        className={styles.logo}
                        src={companyLogo}
                        alt="logo"
                      />

                      <Typography className={styles.companyName}>
                        ALL•CON Contracting
                      </Typography>
                    </Link>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid className={styles.buttongrid} item>
                <Tabs value={value} onChange={handleChange}>
                  <Tab
                    component={Link}
                    to="/Home"
                    className={styles.button}
                    label="Home"
                  />
                  <Tab
                    component={Link}
                    to="/About"
                    className={styles.button}
                    label="About"
                  />

                  <Tab
                    component={Link}
                    to="/Projects"
                    className={styles.button}
                    label="Projects"
                  />

                  <Tab
                    component={Link}
                    to="/Home"
                    className={styles.button}
                    label="Testimonies"
                  />

                  <Tab
                    component={Link}
                    to="/Contacts"
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
      <BackFAB />
    </React.Fragment>
  );
};

export default Navbar;
