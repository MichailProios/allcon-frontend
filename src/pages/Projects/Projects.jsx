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

// import Image from "material-ui-image";

import { Transition } from "react-transition-group";

import delayTransition from "../../utilities/customFunctions/delayTransition.jsx";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition.jsx";

import cacheImages from "../../utilities/customFunctions/cacheImages.jsx";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import imagesImport from "../../utilities/customFunctions/imagesImport.jsx";
import getImageList from "../../utilities/customFunctions/getImageList.jsx";
import useDetectHeight from "../../utilities/customHooks/useDetectHeight.jsx";

const optimizedImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/optimizedImages",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

// const optimizedImages = getImageList("/Projects/optimizedImages");

const bareBurgerImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/bareburger",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const wilsonAnimalImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/willstonanimal",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const west255Images = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/255w",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const east209thImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/20east9th",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const upperEastVetenaryImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/uppereastveterinary",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const carlePlaceAuditoriumImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/carlplace",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const carlPlaceLobbyImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/carlplacelobby",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const carlPlaceLibImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/carlplacelibrary",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const njvetImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/njvet",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const hudsonAnimalImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/hudsonanimal",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const westchesterAveImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/866westchester",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const pierrpointStreetImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/55pierre",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const w79thStreetImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/164w79th",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const townhouse17wImages = imagesImport(
  require.context(
    "D:/Websites/Pictures/Projects/17w10street",
    false,
    /\.(JPG|PNG|png|jpe?g|svg|webp)$/
  )
);

const lupton =
  "https://allconcontracting.com/image-resizing?&quality=20&image=https://allconcontracting.com:2096/files/getFile/Projects/lupton-hall/10-23-1-22.jpg";
const stdemetrios =
  "https://allconcontracting.com/image-resizing?&quality=60&image=https://allconcontracting.com:2096/files/getFile/Projects/optimizedImages/image003.jpg";
const nold =
  "https://allconcontracting.com/image-resizing?&quality=20&image=https://allconcontracting.com:2096/files/getFile/Projects/optimizedImages/11-6-21-2.webp";
const brightwater500 =
  "https://allconcontracting.com/image-resizing?&quality=20&image=https://allconcontracting.com:2096/files/getFile/Projects/500brightwater/1-18-2022-35.jpg";
const bareBurger =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/bareburger/DSC00355.JPG";
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
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/njvet/DSC00209.JPG";
const hudsonAnimal =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/hudsonanimal/DSC00135.JPG";
const westchesterAve =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/866westchester/DSC00300.JPG";
const pierrpointStreet =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/55pierre/DSC00083.JPG";
const w79thStreet =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/164w79th/image001.jpg";
const townhouse17w =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/17w10street/IMG_7491.jpg";

const ogsElwood =
  "https://allconcontracting.com/image-resizing?&quality=100&image=https://allconcontracting.com:2096/files/getFile/Projects/OGS_Elwood/overall.jpg";

const greatneckRoofs =
  "https://allconcontracting.com/image-resizing?&quality=20&image=https://allconcontracting.com:2096/files/getFile/Projects/greatneck-terrace-roofs/11-13-21-5.jpg";

const rockvillePolice =
  "https://allconcontracting.com/image-resizing?&quality=20&image=https://allconcontracting.com:2096/files/getFile/Projects/police-station-email/police-station-05.jpg";

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
      title: "Farmingdale Nold Hall Gymnasium",
      image: nold,
      link: "/Projects/Nold",
    },
    {
      title: "500 Brightwater Court",
      image: brightwater500,
      link: "/Projects/500Bridgewater",
    },

    {
      title: "Lupton Hall - Roof Replacement",
      image: lupton,
      link: "/Projects/LuptonHall",
    },
    {
      title: "Greatneck Terrace Roofs",
      image: greatneckRoofs,
      link: "/Projects/GreatneckTerraceRoofs",
    },
    {
      title: "Rockville Centre Police Station",
      image: rockvillePolice,
      link: "/Projects/RockvilleCentrePolice",
    },

    {
      title: "St. Demetrios Greek Orthodox Church",
      image: stdemetrios,
      link: "/Projects/SaintDemetriosChurch",
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
      title: "DOT Elwood Operation Facility",
      image: ogsElwood,
      link: "/Projects/DOTElwood",
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

  const height = useDetectHeight();

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   cacheImages([
  //     lupton,
  //     stdemetrios,
  //     nold,
  //     brightwater500,
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
  //   ])
  //     .then(() => {
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setLoading(true);
  //     });
  // }, []);

  if (!loading) {
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
  } else {
    return (
      <div style={{ height: `calc(${height}px - 65px)` }}>
        <LoadingSpinner />
      </div>
    );
  }
};

export default Projects;
