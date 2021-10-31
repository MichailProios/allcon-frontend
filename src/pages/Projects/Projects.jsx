import React, { useState } from "react";
import { Link } from "react-router-dom";

// Material-UI
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Grow,
} from "@material-ui/core";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import carlPlaceLobby from "../../utilities/images/carlplacelobby/carlplacelobby.JPG";
import bareBurger from "../../utilities/images/bareburger/DSC00355.JPG";
import carlPlaceLib from "../../utilities/images/carlplacelibrary/DSC00231.JPG";
import west255 from "../../utilities/images/255w/DSC00902.JPG";
import townhouse17w from "../../utilities/images/17w10street/IMG_7491.jpg";
import pierrpointStreet from "../../utilities/images/55pierre/DSC00083.JPG";
import w79thStreet from "../../utilities/images/164w79th/image001.jpg";
import wilsonAnimal from "../../utilities/images/hudsonanimal/DSC00249.JPG";
import stdemetrios from "../../utilities/images/stdemetrios/image003.jpg";
import njvet from "../../utilities/images/njvet/DSC00209.JPG";
import carlePlaceAuditorium from "../../utilities/images/carlplace/DSC00161.JPG";
import hudsonAnimal from "../../utilities/images/hudsonanimal/DSC00135.JPG";
import westchesterAve from "../../utilities/images/866westchester/DSC00300.JPG";
import upperEastVetenary from "../../utilities/images/uppereastveterinary/DSC00250.JPG";
import east209th from "../../utilities/images/20east9th/DSC00345.JPG";

const useStyles = makeStyles({
  root: {
    marginTop: "0.8em",
  },
});
function Projects() {
  const styles = useStyles();

  const [listData, setListData] = useState([
    {
      id: 0,
      title: "Carle Place UFSD – Lobby Renovations",
      image: carlPlaceLobby,
      link: "/modules/RegBI",
    },
    {
      id: 1,
      title: "1681 East 87th Street",
      image: bareBurger,
      link: "/modules/CommissionChecker",
    },
    {
      id: 2,
      title: "Carle Place UFSD – Library Renovations",
      image: carlPlaceLib,
      link: "/modules/MRAND",
    },
    {
      id: 3,
      title: "255 West 108th Street",
      image: west255,
      link: "/modules/mcors",
    },
    {
      id: 4,
      title: "17W 10th St Townhouse",
      image: townhouse17w,
      link: "/modules/ce",
    },
    {
      id: 5,
      title: "55 Pierrpoint Street",
      image: pierrpointStreet,
      link: "/modules/meps",
    },
    {
      id: 6,
      title: "164 W79th Street",
      image: w79thStreet,
      link: "/modules/dol",
    },
    {
      id: 7,
      title: "Williston Animal Hospital",
      image: wilsonAnimal,
      link: "/modules/cl",
    },
    {
      id: 8,
      title: "St. Demetrios Greek Orthodox Church",
      image: stdemetrios,
      link: "/modules/mrop",
    },
    {
      id: 9,
      title: "New Jersey Veterinary Hospital",
      image: njvet,
      link: "/modules/mcs",
    },
    {
      id: 10,
      title: "Carle Place UFSD – Auditorium Renovations",
      image: carlePlaceAuditorium,
      link: "/modules/mcpdash",
    },
    {
      id: 11,
      title: "Hudson Animal Hospital",
      image: hudsonAnimal,
      link: "/modules/mvacs",
    },
    {
      id: 12,
      title: "866 Westchester Ave.",
      image: westchesterAve,
      link: "/modules/figets",
    },
    {
      id: 13,
      title: "Upper East Side Veterinary Hospital",
      image: upperEastVetenary,
      link: "/modules/bcpuser",
    },
    {
      id: 14,
      title: "20 East 9th Street",
      image: east209th,
      link: "/modules/mibs",
    },
  ]);

  const delayTime = (index) => {
    return 350 * index;
  };
  return (
    <Grid container spacing={1} className={styles.root}>
      {listData.map((value, index) => (
        <Grow in={true} timeout={delayTime(index)}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <ProjectCard title={value.title} image={value.image} />
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
}

export default Projects;
