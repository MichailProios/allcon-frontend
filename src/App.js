//Basic dependencies
import React, { useState, useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

import { Box, Tooltip } from "@material-ui/core";

//Styling
import "./App.css";

import projectRoutes from "./utilities/routes/projectRoutes";
import profileRoutes from "./utilities/routes/profileRoutes";
import cacheImages from "./utilities/customFunctions/cacheImages.jsx";
import LoadingSquares from "./components/LoadingSquares/LoadingSquares";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

//Pages
import Navbar from "./components/Navbar/Navbar.jsx";
import useDetectHeight from "./utilities/customHooks/useDetectHeight";
// import Home from "./pages/Home/Home.jsx";
// import Projects from "./pages/Projects/Projects.jsx";
// import About from "./pages/About/About.jsx";
// import Contacts from "./pages/Contacts/Contacts";
// import Testimonies from "./pages/Testimonies/Testimonies";

import loadable from "react-loadable";

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
    },
    secondary: {
      main: "#008B8B",
      light: "#00b3b3",
      dark: "#006666",
    },
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

const AsyncPages = {
  Home: loadable({
    loader: () => import("./pages/Home/Home.jsx"),
    loading: LoadingSquares,
  }),
  Projects: loadable({
    loader: () => import("./pages/Projects/Projects.jsx"),
    loading: LoadingSquares,
  }),
  About: loadable({
    loader: () => import("./pages/About/About.jsx"),
    loading: LoadingSquares,
  }),
  Contacts: loadable({
    loader: () => import("./pages/Contacts/Contacts.jsx"),
    loading: LoadingSquares,
  }),
  Testimonies: loadable({
    loader: () => import("./pages/Testimonies/Testimonies.jsx"),
    loading: LoadingSquares,
  }),
};

export const siteMap = {
  Home: {
    title: "Home",
    path: "/Home",
    description: "Allcon Home",
  },
  About: {
    title: "About",
    path: "/About",
    description: "Allcon About Us",
  },
  Projects: {
    title: "Projects",
    path: "/Projects",
    description: "Allcon Projects",
  },
  Testimonies: {
    title: "Testimonies",
    path: "/Testimonies",
    description: "Allcon Testimonies",
  },
  Contacts: {
    title: "Contacts",
    path: "/Contacts",
    description: "Allcon Contacts",
  },
};

function App() {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const height = useDetectHeight();

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
        <Router>
          <Navbar>
            <Box>
              <Routes>
                <Route
                  path={siteMap.Home.path}
                  exact
                  element={<AsyncPages.Home />}
                />
                <Route
                  path={siteMap.About.path}
                  exact
                  element={<AsyncPages.About />}
                />
                <Route
                  path={siteMap.Contacts.path}
                  exact
                  element={<AsyncPages.Contacts />}
                />
                <Route
                  path={siteMap.Projects.path}
                  exact
                  element={<AsyncPages.Projects />}
                />
                <Route
                  path={siteMap.Testimonies.path}
                  exact
                  element={<AsyncPages.Testimonies />}
                />

                <Route
                  path="*"
                  exact
                  element={<Navigate to="/Home" replace />}
                />

                <Route
                  path="/"
                  exact
                  element={<Navigate to="/Home" replace />}
                />

                {projectComponents}
                {profileComponents}
              </Routes>
            </Box>
          </Navbar>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
