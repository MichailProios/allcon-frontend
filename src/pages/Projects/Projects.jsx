import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

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

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import lupton from "../../utilities/images/lupton-hall/lupton.jpg";
import carlPlaceLobby from "../../utilities/images/carlplacelobby/carlplacelobby.JPG";
import bareBurger from "../../utilities/images/bareburger/DSC00355.JPG";
import carlPlaceLib from "../../utilities/images/carlplacelibrary/DSC00231.JPG";
import west255 from "../../utilities/images/255w/DSC00902.JPG";
import townhouse17w from "../../utilities/images/17w10street/IMG_7491.jpg";
import pierrpointStreet from "../../utilities/images/55pierre/DSC00083.JPG";
import w79thStreet from "../../utilities/images/164w79th/image001.jpg";
import wilsonAnimal from "../../utilities/images/hudsonanimal/DSC00249.JPG";
import stdemetrios from "../../utilities/images/stdemetrios/church.jpg";
import njvet from "../../utilities/images/njvet/DSC00209.JPG";
import carlePlaceAuditorium from "../../utilities/images/carlplace/DSC00161.JPG";
import hudsonAnimal from "../../utilities/images/hudsonanimal/DSC00135.JPG";
import westchesterAve from "../../utilities/images/866westchester/DSC00300.JPG";
import upperEastVetenary from "../../utilities/images/uppereastveterinary/DSC00250.JPG";
import east209th from "../../utilities/images/20east9th/DSC00345.JPG";

const useStyles = makeStyles({});

const Projects = () => {
  const styles = useStyles();

  const [listData, setListData] = useState([
    {
      title: "Lupton Hall - Roof Replacement",
      image: lupton,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },
    {
      title: "Carle Place UFSD – Lobby Renovations",
      image: carlPlaceLobby,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },

    {
      title: "St. Demetrios Greek Orthodox Church",
      image: stdemetrios,
      cols: 4,
      rows: 2,
      link: "/projects/inprogress",
    },

    {
      title: "Carle Place UFSD – Library Renovations",
      image: carlPlaceLib,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },

    {
      title: "255 West 108th Street",
      image: west255,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },
    {
      title: "Williston Animal Hospital",
      image: wilsonAnimal,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },

    {
      title: "1681 East 87th Street",
      image: bareBurger,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },

    {
      title: "17W 10th St Townhouse",
      image: townhouse17w,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },
    {
      title: "164 W79th Street",
      image: w79thStreet,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },
    {
      title: "55 Pierrpoint Street",
      image: pierrpointStreet,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },
    {
      title: "Hudson Animal Hospital",
      image: hudsonAnimal,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },

    {
      title: "New Jersey Veterinary Hospital",
      image: njvet,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },
    {
      title: "20 East 9th Street",
      image: east209th,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },
    {
      title: "Carle Place UFSD – Auditorium Renovations",
      image: carlePlaceAuditorium,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },

    {
      title: "Upper East Side Veterinary Hospital",
      image: upperEastVetenary,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },
    {
      title: "866 Westchester Ave.",
      image: westchesterAve,
      cols: 4,
      rows: 1,
      link: "/projects/inprogress",
    },
  ]);

  const delayTime = (index) => {
    return 300 * index;
  };

  return (
    <Grid container spacing={1} className={styles.root}>
      {listData.map((value, index) => (
        <Grow in={true} timeout={delayTime(index)}>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
            <ProjectCard title={value.title} image={value.image} />
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
};

export default Projects;
