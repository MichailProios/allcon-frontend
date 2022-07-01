//React
import React, { Suspense, useEffect, useState } from "react";

//React Router
import { useNavigate } from "react-router";

//Material UI
import { Typography, Fade, Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//Icons
import ApartmentIcon from "@material-ui/icons/Apartment";

//React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import LoadingSquares from "../../components/LoadingSquares/LoadingSquares";

//Functions
import useDetectHeight from "../../utilities/customHooks/useDetectHeight";
import cacheImages from "../../utilities/customFunctions/cacheImages.jsx";
import ReactImage from "../../components/ReactImage/ReactImage";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

//Pictures
const lupton =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/lupton-hall/10-23-1-22.jpg";

const elwood =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/OGS_Elwood/20220412_120728229_iOS.jpg";

const policeStation =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/police-station-email/police-station-05.jpg";

const nold =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/nold/11-6-21-2.webp";

const apt724 =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/724/3-8-20.7.jpg";

const greatneckRoofs =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/greatneck-terrace-roofs/11-13-21-5.jpg";

// const church =
//   "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=2&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/optimizedImages/image003.jpg";

// const brightwater500 =
//   "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=2&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/500brightwater/1-18-2022-26.jpg";

//Styling
const useStyles = makeStyles((theme) => ({
  quote: {
    margin: 0,
    width: "100%",
    wordWrap: "break-word",
    textAlign: "center",
    userSelect: "none",
    userDrag: "none",

    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    fontSize: "2.3em",
    textShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",

    [theme.breakpoints.down("lg")]: { fontSize: "2.0em" },

    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
  quoteContainer: {
    textAlign: "center",
    width: "100%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },

  quoteButton: {
    marginTop: "0.2em",
    fontSize: "1em",
    textShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
  },
}));

const Home = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const height = useDetectHeight();

  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    draggable: false,
    swipe: false,
    pauseOnHover: false,
    lazyLoad: "progressive",
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cacheImages([lupton, elwood, policeStation, nold, apt724, greatneckRoofs])
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  }, []);

  if (!loading) {
    return (
      <Fade in={true} timeout={300}>
        <div
          style={{
            height: `calc(${height}px - 65px)`,
            touchAction: "none",
            userDrag: "none",
            userSelect: "none",
            overflow: "hidden",
          }}
        >
          <Slider {...settings}>
            <div>
              <Suspense
                fallback={
                  <div style={{ height: `calc(${height}px - 65px)` }}>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ReactImage
                  image={lupton}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: `calc(${height}px - 65px)`,
                    userDrag: "none",
                    userSelect: "none",
                    pointerEvents: "none",
                    filter: "brightness(85%)",
                    display: "block",
                    lineHeight: 0,
                  }}
                  className={styles.media}
                />
              </Suspense>
            </div>
            {/* <div>
              <Suspense
                fallback={
                  <div style={{ height: `calc(${height}px - 65px)` }}>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ReactImage
                  image={elwood}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: `calc(${height}px - 65px)`,
                    userDrag: "none",
                    userSelect: "none",
                    pointerEvents: "none",
                    filter: "brightness(85%)",
                    display: "block",
                    lineHeight: 0,
                  }}
                  className={styles.media}
                />
              </Suspense>
            </div> */}

            <div>
              <Suspense
                fallback={
                  <div style={{ height: `calc(${height}px - 65px)` }}>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ReactImage
                  image={policeStation}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: `calc(${height}px - 65px)`,
                    userDrag: "none",
                    userSelect: "none",
                    pointerEvents: "none",
                    filter: "brightness(85%)",
                    display: "block",
                    lineHeight: 0,
                  }}
                  className={styles.media}
                />
              </Suspense>
            </div>

            <div>
              <Suspense
                fallback={
                  <div style={{ height: `calc(${height}px - 65px)` }}>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ReactImage
                  image={nold}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: `calc(${height}px - 65px)`,
                    userDrag: "none",
                    userSelect: "none",
                    pointerEvents: "none",
                    filter: "brightness(100%)",
                    display: "block",
                    lineHeight: 0,
                  }}
                  className={styles.media}
                />
              </Suspense>
            </div>

            <div>
              <Suspense
                fallback={
                  <div style={{ height: `calc(${height}px - 65px)` }}>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ReactImage
                  image={apt724}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: `calc(${height}px - 65px)`,
                    userDrag: "none",
                    userSelect: "none",
                    pointerEvents: "none",
                    filter: "brightness(85%)",
                    display: "block",
                    lineHeight: 0,
                  }}
                  className={styles.media}
                />
              </Suspense>
            </div>

            <div>
              <Suspense
                fallback={
                  <div style={{ height: `calc(${height}px - 65px)` }}>
                    <LoadingSpinner />
                  </div>
                }
              >
                <ReactImage
                  image={greatneckRoofs}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: `calc(${height}px - 65px)`,
                    userDrag: "none",
                    userSelect: "none",
                    pointerEvents: "none",
                    filter: "brightness(85%)",
                    display: "block",
                    lineHeight: 0,
                  }}
                  className={styles.media}
                />
              </Suspense>
            </div>
          </Slider>

          <Fade
            in={true}
            style={{
              transitionDelay: `${15 + `00`}ms`,
            }}
            timeout={400}
          >
            <div className={styles.quoteContainer}>
              <Typography className={styles.quote}>
                Infinite Possibilities through Integrated Solutions
              </Typography>
              <Button
                className={styles.quoteButton}
                color="secondary"
                variant="outlined"
                startIcon={<ApartmentIcon />}
                onClick={() => navigate("/Projects")}
              >
                Explore our Projects
              </Button>
            </div>
          </Fade>
        </div>
      </Fade>
    );
  } else {
    return <LoadingSquares />;
  }
};

export default Home;
