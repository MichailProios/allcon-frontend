//Basic dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
// import About from "./Pages/About/About.jsx";

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

function App() {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          {/* <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} /> */}
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
