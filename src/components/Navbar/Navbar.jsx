//Basic dependencies
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import * as Scroll from "react-scroll";
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
  Drawer,
  Backdrop,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

//Pictures and Icons
import companyLogo from "../../utilities/images/optimizedImages/logo-new.webp";
import { useTheme } from "@material-ui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: "0.3em",
    height: "auto",
    width: "3.2em",
    userDrag: "none",
  },
  companyName: {
    margin: "1em 0.4em 0.6em 0.2em",
    letterSpacing: "0.1em",
    fontSize: "1.2em",
    fontSmooth: "5em",
    fontFamily: "EB Garamond , serif",
    color: "black",
    textDecoration: "none",
    userSelect: "none",
    userDrag: "none",
  },
  companyNameSmall: {
    margin: "1em 0em 0em 0em",
    letterSpacing: "0.1em",
    fontSize: "1.2em",
    fontSmooth: "5em",
    fontFamily: "EB Garamond , serif",
    color: "black",
    textDecoration: "none",
    userSelect: "none",
    userDrag: "none",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  appbar: {
    backgroundColor: "#fff",
    position: "sticky",
    width: "100vw",
    overflowX: "hidden",
    zIndex: theme.zIndex.drawer + 1,
    // backgroundColor: theme.palette.primary.main,
    // transition: theme.transitions.create(["width", "margin"], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  },

  // appbarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),

  //   [theme.breakpoints.down("sm")]: {
  //     width: "100%",
  //   },
  // },

  drawer: {
    width: drawerWidth,
    zIndex: theme.zIndex.drawer + 2,
    flexShrink: 0,
  },

  drawerPaper: {
    width: drawerWidth,
    zIndex: theme.zIndex.drawer + 2,
    userSelect: "none",
    userDrag: "none",
  },

  drawerIcon: {
    color: "black",
    fontSize: "28px",
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.7, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },

  menuButton: {
    // display: "none",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
    // top: "50%",
    // transform: "translateY(-50%)",
    // margin: "0.1em 0em 0em 0em",
    color: "black",
  },

  menuIcon: {
    fontSize: "40px",
  },

  menuButtonGrid: {
    display: "none",

    [theme.breakpoints.down("md")]: {
      display: "initial",
    },
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

  buttonSmall: {
    width: "100%",
    userSelect: "none",
    userDrag: "none",
  },

  buttongrid: {
    paddingRight: "4em",
    userSelect: "none",
    userDrag: "none",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,

    // [theme.breakpoints.down("xs")]: {
    //   zIndex: theme.zIndex.drawer + 1,
    // },
  },
  verticalTabs: {
    userSelect: "none",
    userDrag: "none",
  },

  indicator: {
    left: 0,
  },
  // contentShift: {
  //   transition: theme.transitions.create("margin", {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginRight: 0,
  // },
}));

function ScrollTop(props) {
  const { children } = props;
  const styles = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    //window[`scrollTo`]({ top: 0, behavior: `smooth` });
    if (isMobile) {
      scroll.scrollToTop({ duration: 800, delay: 0, smooth: "easeInOutQuart" });
    } else {
      scroll.scrollToTop({ duration: 0, delay: 0, smooth: "easeInOutQuart" });
    }
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
    const pathnames = location.pathname.toLowerCase();

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
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const pathnames = location.pathname.toLowerCase();

    switch (true) {
      case pathnames === "/":
        setValue(0);
        document.documentElement.style.overflowY = "hidden";
        document.body.style.overflowY = "hidden";
        if (isMobile) {
          scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        } else {
          scroll.scrollToTop({
            duration: 0,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        break;
      case pathnames.startsWith("/home"):
        setValue(0);
        document.documentElement.style.overflowY = "hidden";
        document.body.style.overflowY = "hidden";
        if (isMobile) {
          scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        } else {
          scroll.scrollToTop({
            duration: 0,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        break;
      case pathnames.startsWith("/about"):
        setValue(1);
        document.documentElement.style.overflowY = "visible";
        document.body.style.overflowY = "visible";
        if (isMobile) {
          scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        } else {
          scroll.scrollToTop({
            duration: 0,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        break;
      case pathnames.startsWith("/projects"):
        setValue(2);
        document.documentElement.style.overflowY = "visible";
        document.body.style.overflowY = "visible";
        if (isMobile) {
          scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        } else {
          scroll.scrollToTop({
            duration: 0,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        break;
      case pathnames.startsWith("/testimonies"):
        setValue(3);
        document.documentElement.style.overflowY = "visible";
        document.body.style.overflowY = "visible";
        if (isMobile) {
          scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        } else {
          scroll.scrollToTop({
            duration: 0,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        break;
      case pathnames.startsWith("/contacts"):
        setValue(4);
        document.documentElement.style.overflowY = "visible";
        document.body.style.overflowY = "visible";
        if (isMobile) {
          scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        } else {
          scroll.scrollToTop({
            duration: 0,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        break;
      default:
        document.documentElement.style.overflowY = "visible";
        document.body.style.overflowY = "visible";
        if (isMobile) {
          scroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        } else {
          scroll.scrollToTop({
            duration: 0,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
        break;
    }
  }, [location]);

  // useEffect(() => {
  //   const img1 = new Image();
  //   img1.src = companyLogo.fileName;
  // }, []);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = (e) => {
    setOpenDrawer(true);
  };

  // Fire to close drawer
  const handleDrawerClose = (e) => {
    setOpenDrawer(false);
  };

  if (openDrawer === true) {
    document.documentElement.style.overflow = "hidden";
  } else {
    if (
      !location.pathname.toLowerCase().startsWith("/") ||
      !location.pathname.toLowerCase().startsWith("/home")
    ) {
      document.documentElement.style.overflow = "visible";
    }
  }

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
                <Tooltip title="Home" placement="right">
                  <Link to="/Home" className={styles.appbarLinks}>
                    <Grid container>
                      <Grid item>
                        <img
                          className={styles.logo}
                          src={companyLogo}
                          alt="logo"
                        />
                      </Grid>
                      <Grid item>
                        <Typography className={styles.companyName}>
                          ALL•CON
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={styles.companyNameSmall}>
                          Contracting
                        </Typography>
                      </Grid>
                    </Grid>
                  </Link>
                </Tooltip>
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
              <Grid className={styles.menuButtonGrid}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={styles.menuButton}
                >
                  <MenuIcon className={styles.menuIcon} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
          <Divider />
        </AppBar>
      </HideOnScroll>

      <Drawer
        className={styles.drawer}
        variant="persistent"
        anchor="right"
        open={openDrawer}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <div className={styles.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon className={styles.drawerIcon} />
          </IconButton>
        </div>
        <Divider />
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          className={styles.verticalTabs}
          classes={{
            indicator: styles.indicator,
          }}
        >
          <Tab
            component={Link}
            to="/Home"
            onClick={handleDrawerClose}
            className={styles.buttonSmall}
            label="Home"
          />
          <Tab
            component={Link}
            to="/About"
            onClick={handleDrawerClose}
            className={styles.buttonSmall}
            label="About"
          />

          <Tab
            component={Link}
            to="/Projects"
            onClick={handleDrawerClose}
            className={styles.buttonSmall}
            label="Projects"
          />

          <Tab
            component={Link}
            to="/Home"
            onClick={handleDrawerClose}
            className={styles.buttonSmall}
            label="Testimonies"
          />

          <Tab
            component={Link}
            to="/Contacts"
            onClick={handleDrawerClose}
            className={styles.buttonSmall}
            label="Contacts"
          />
        </Tabs>
      </Drawer>
      {/* <Toolbar /> */}
      <ScrollTop>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <BackFAB />
      <Backdrop
        className={styles.backdrop}
        open={openDrawer}
        onClick={handleDrawerClose}
      />
    </React.Fragment>
  );
};

export default Navbar;
