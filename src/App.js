//Basic dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

//Styling
import "./App.css";

//Pages
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
//import Services from "./pages/Services/Services.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import About from "./pages/About/About.jsx";

import Contacts from "./pages/Contacts/Contacts";
import Testimonies from "./pages/Testimonies/Testimonies";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

import projectRoutes from "./utilities/routes/projectRoutes";

import profileRoutes from "./utilities/routes/profileRoutes";

import lupton from "./utilities/images/Home/lupton.jpg";
import church from "./utilities/images/Home/church.jpg";

import cacheImages from "./utilities/customFunctions/cacheImages.jsx";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*": {
      scrollbarWidth: "thin",
      scrollbarColor: "#B7B7B7 transparent",
      "&::-webkit-scrollbar": {
        width: 8,
        height: 6,
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: 6,
        backgroundColor: "#B7B7B7",
        minHeight: 24,
        minWidth: 24,
      },
      "&::-webkit-scrollbar-thumb:focus": {
        backgroundColor: "#adadad",
      },
      "&::-webkit-scrollbar-thumb:active": {
        backgroundColor: "#adadad",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#adadad",
      },
      "&::-webkit-scrollbar-corner": {
        backgroundColor: "transparent",
      },
    },
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#008B8B",
      light: "#00b3b3",
      dark: "#006666",
      // dark: "#001d3e",
    },
    secondary: {
      main: "#008B8B",
      light: "#00b3b3",
      dark: "#006666",
    },
    // button: {
    //   main: "#1d4369",
    //   hover: "#4D8AC9",
    // },
    success: {
      main: "#4caf50",
      secondary: "#3e8e41",
    },
    error: {
      main: "#f44336",
      secondary: "#c2160a",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2160,
      xxxl: 3840,
    },
  },
});

function App() {
  const styles = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const imgs = [church, lupton];

    cacheImages(imgs);

    setIsLoaded(true);
  }, []);

  const projectComponents = projectRoutes.map(({ path, component }, key) => (
    // <Route exact path={path} component={component} key={key} />
    <Route path={path} exact element={component} key={key} />
  ));

  const profileComponents = profileRoutes.map(({ path, component }, key) => (
    // <Route exact path={path} component={component} key={key} />
    <Route path={path} exact element={component} key={key} />
  ));

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {isLoaded === true ? (
          <Router>
            <Navbar />
            <div style={{ overflow: "hidden" }}>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/Home" exact element={<Home />} />
                <Route path="/About" exact element={<About />} />
                <Route path="/Contacts" exact element={<Contacts />} />
                <Route path="/Projects" exact element={<Projects />} />
                <Route path="/Testimonies" exact element={<Testimonies />} />

                {/* <Route
                  path="/projects/LuptonHall"
                  exact
                  element={<LuptonHall />}
                /> */}
                {projectComponents}
                {profileComponents}
              </Routes>
            </div>
          </Router>
        ) : (
          <LoadingSpinner />
        )}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
