import React, { useState, useEffect } from "react";

// Material-UI
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Grow,
  Grid,
  useScrollTrigger,
} from "@material-ui/core";

import Image from "material-ui-image";

import { Transition } from "react-transition-group";

import delayTransition from "../../utilities/customFunctions/delayTransition.jsx";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import lupton from "../../utilities/images/lupton-hall/lupton.jpg";
import stdemetrios from "../../utilities/images/stdemetrios/image003.jpg";
import nold from "../../utilities/images/nold/11-6-21-2.jpg";
import bridgewater500 from "../../utilities/images/500brightwater/1-18-2022-35.jpg";
import bareBurger from "../../utilities/images/bareburger/DSC00355.JPG";
import wilsonAnimal from "../../utilities/images/hudsonanimal/DSC00249.JPG";
import west255 from "../../utilities/images/255w/DSC00902.JPG";
import east209th from "../../utilities/images/20east9th/DSC00345.JPG";
import upperEastVetenary from "../../utilities/images/uppereastveterinary/DSC00250.JPG";
import carlePlaceAuditorium from "../../utilities/images/carlplace/DSC00161.JPG";
import carlPlaceLobby from "../../utilities/images/carlplacelobby/carlplacelobby.JPG";
import carlPlaceLib from "../../utilities/images/carlplacelibrary/DSC00231.JPG";
import njvet from "../../utilities/images/njvet/DSC00209.JPG";
import hudsonAnimal from "../../utilities/images/hudsonanimal/DSC00135.JPG";
import westchesterAve from "../../utilities/images/866westchester/DSC00300.JPG";
import pierrpointStreet from "../../utilities/images/55pierre/DSC00083.JPG";
import w79thStreet from "../../utilities/images/164w79th/image001.jpg";
import townhouse17w from "../../utilities/images/17w10street/IMG_7491.jpg";

import { wait } from "@testing-library/user-event/dist/utils";
import useDelayTransition from "../../utilities/customHooks/useDelayTransition.jsx";

const useStyles = makeStyles({
  root: {
    padding: "1em 0em 1em 1em",
    width: "100%",
  },
});

const Projects = () => {
  const styles = useStyles();

  const [listData, setListData] = useState([
    {
      title: "Lupton Hall - Roof Replacement",
      image: lupton,
      link: "/Projects/LuptonHall",
    },
    {
      title: "St. Demetrios Greek Orthodox Church",
      image: stdemetrios,
      link: "/Projects/SaintDemetriosChurch",
    },
    {
      title: "Farmingdale Nold Hall Gymnasium",
      image: nold,
      link: "/Projects/Nold",
    },
    {
      title: "500 Brightwater Court",
      image: bridgewater500,
      link: "/Projects/500Bridgewater",
    },
    {
      title: "Bareburger 1681 East 87th Street",
      image: bareBurger,
      link: "/Projects/Bareburger",
    },
    {
      title: "Williston Animal Hospital",
      image: wilsonAnimal,
      link: "/Projects/WilsonAnimal",
    },
    {
      title: "255 West 108th Street",
      image: west255,
      link: "/Projects/255West",
    },
    {
      title: "20 East 9th Street",
      image: east209th,
      link: "/Projects/20East",
    },
    {
      title: "Upper East Side Veterinary Hospital",
      image: upperEastVetenary,
      link: "/Projects/UpperEastVetenary",
    },
    {
      title: "Carle Place UFSD – Auditorium Renovations",
      image: carlePlaceAuditorium,
      link: "/Projects/CarlePlaceAuditorium",
    },

    {
      title: "Carle Place UFSD – Lobby Renovations",
      image: carlPlaceLobby,
      link: "/Projects/CarlePlaceLobby",
    },

    {
      title: "Carle Place UFSD – Library Renovations",
      image: carlPlaceLib,
      link: "/Projects/CarlePlaceLibrary",
    },
    {
      title: "New Jersey Veterinary Hospital",
      image: njvet,
      link: "/Projects/NewJerseyVeterinary ",
    },
    {
      title: "Hudson Animal Hospital",
      image: hudsonAnimal,
      link: "/Projects/HudsonAnimalHospital",
    },
    {
      title: "866 Westchester Ave.",
      image: westchesterAve,
      link: "/Projects/866Westchester",
    },
    {
      title: "55 Pierrpoint Street",
      image: pierrpointStreet,
      link: "/Projects/55Pierrpoint",
    },
    {
      title: "164 W79th Street",
      image: w79thStreet,
      link: "/Projects/164_W79th",
    },

    {
      title: "17W 10th St Townhouse",
      image: townhouse17w,
      link: "/Projects/17W_10th_Townhouse ",
    },
  ]);

  return (
    <Grid container spacing={2} className={styles.root}>
      {listData.map((value, index) => (
        <ProjectCard
          title={value.title}
          image={value.image}
          link={value.link}
          index={index}
          key={index}
        />
      ))}
    </Grid>
  );
};

export default Projects;
