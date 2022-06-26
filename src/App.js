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

const Home = React.lazy(() => import("./pages/Home/Home.jsx"));
//const Services = React.lazy(() => import()) "./pages/Services/Services.jsx";
const Projects = React.lazy(() => import("./pages/Projects/Projects.jsx"));
const About = React.lazy(() => import("./pages/About/About.jsx"));

const Contacts = React.lazy(() => import("./pages/Contacts/Contacts"));
const Testimonies = React.lazy(() => import("./pages/Testimonies/Testimonies"));

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

const church =
  "https://allconcontracting.com/image-resizing?&quality=50&image=https://allconcontracting.com:2096/files/getFile/Projects/optimizedImages/image003.jpg";

const george =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-24.jpg";
const markos =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-19.jpg";

const joseph =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-23.jpg";
const nick =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-16.jpg";
const ahmed =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-28.jpg";
const sandra =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-14.jpg";
const tina =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-13.jpg";
const wahid =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-12.jpg";
const ana =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-27.jpg";

const company =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Personnel/5-8-2022-8.jpg";

const lupton =
  "https://allconcontracting.com/image-resizing?&quality=15&image=https://allconcontracting.com:2096/files/getFile/Projects/lupton-hall/10-23-1-22.jpg";
const stdemetrios =
  "https://allconcontracting.com/image-resizing?&quality=20&image=https://allconcontracting.com:2096/files/getFile/Projects/optimizedImages/image003.jpg";
const nold =
  "https://allconcontracting.com/image-resizing?&quality=15&image=https://allconcontracting.com:2096/files/getFile/Projects/optimizedImages/11-6-21-2.webp";
const brightwater500 =
  "https://allconcontracting.com/image-resizing?&quality=15&image=https://allconcontracting.com:2096/files/getFile/Projects/500brightwater/1-18-2022-35.jpg";
const bareBurger =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/bareburger/DSC00354.JPG";
const wilsonAnimal =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/willstonanimal/DSC00051.JPG";
const west255 =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/255w/1DSC00385.JPG";
const east209th =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/20east9th/DSC00345.JPG";
const upperEastVetenary =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/uppereastveterinary/DSC00250.JPG";
const carlePlaceAuditorium =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/carlplace/DSC00161.JPG";
const carlPlaceLobby =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/carlplacelobby/carlplacelobby.JPG";
const carlPlaceLib =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/carlplacelibrary/DSC00231.JPG";
const njvet =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/njvet/DSC00265.JPG";
const hudsonAnimal =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/hudsonanimal/DSC00249.JPG";
const westchesterAve =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/866westchester/DSC00300.JPG";
const pierrpointStreet =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/55pierre/DSC00083.JPG";
const w79thStreet =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/164w79th/image001.jpg";
const townhouse17w =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/17w10street/IMG_7490.jpg";

const ogsElwood =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/OGS_Elwood/overall.jpg";

const greatneckRoofs =
  "https://allconcontracting.com/image-resizing?&quality=15&image=https://allconcontracting.com:2096/files/getFile/Projects/greatneck-terrace-roofs/11-13-21-5.jpg";

const rockvillePolice =
  "https://allconcontracting.com/image-resizing?&quality=15&image=https://allconcontracting.com:2096/files/getFile/Projects/police-station-email/police-station-05.jpg";

const companyLogo =
  "https://allconcontracting.com/image-resizing?&quality=30&image=https://allconcontracting.com:2096/files/getFile/Logos/logo-new.png";

function App() {
  const styles = useStyles();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   cacheImages([
  //     companyLogo,
  //     nold,
  //     church,
  //     brightwater500,
  //     lupton,
  //     george,
  //     markos,
  //     joseph,
  //     nick,
  //     ahmed,
  //     sandra,
  //     tina,
  //     wahid,
  //     ana,
  //     company,
  //     stdemetrios,
  //     bareBurger,
  //     wilsonAnimal,
  //     west255,
  //     east209th,
  //     upperEastVetenary,
  //     carlePlaceAuditorium,
  //     carlPlaceLobby,
  //     carlPlaceLib,
  //     njvet,
  //     hudsonAnimal,
  //     westchesterAve,
  //     pierrpointStreet,
  //     w79thStreet,
  //     townhouse17w,
  //     ogsElwood,
  //     greatneckRoofs,
  //     rockvillePolice,
  //   ])
  //     .then(() => {
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setLoading(true);
  //     });
  // }, []);

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
        {loading ? (
          <Router>
            <Navbar />
            <Suspense fallback={<LoadingSquares />}>
              <Box
                style={{
                  maxHeight: "100%",
                }}
              >
                <Routes>
                  {/* <Route path="/" exact element={<Home />} /> */}
                  <Route path="/Home" exact element={<Home />} />
                  <Route path="/About" exact element={<About />} />
                  <Route path="/Contacts" exact element={<Contacts />} />
                  <Route path="/Projects" exact element={<Projects />} />
                  <Route path="/Testimonies" exact element={<Testimonies />} />

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

                  {/* <Route
                  path="/projects/LuptonHall"
                  exact
                  element={<LuptonHall />}
                /> */}
                  {projectComponents}
                  {profileComponents}
                </Routes>
              </Box>
            </Suspense>
          </Router>
        ) : (
          <LoadingSquares />
        )}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
