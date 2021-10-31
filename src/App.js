//Basic dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Styling
import "./App.css";

//Pages
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
//import Services from "./pages/Services/Services.jsx";
import Projects from "./pages/Projects/Projects.jsx";
// import About from "./Pages/About/About.jsx";

function App() {
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
