import React, { useEffect, useState } from "react";

//Material-UI Styles
import { makeStyles, useTheme } from "@material-ui/styles";

import {
  Card,
  Grid,
  Typography,
  Grow,
  CardActionArea,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import { isMobile } from "react-device-detect";

import { useInView } from "react-intersection-observer";

import useDelayTransition from "../../utilities/customHooks/useDelayTransition";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import MuiImage from "material-ui-image";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: "10em",
    // width: "auto",

    userDrag: "none",
    userSelect: "none",
  },
  cardAction: {
    height: "auto",
    userDrag: "none",
    userSelect: "none",

    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.005, 1.005, 1)",
    },
  },
  profileImage: {
    userDrag: "none",
    userSelect: "none",
  },
  profileDescription: { padding: "0.8em", width: "100%" },
}));

const ProfileCard = ({ link, title, subtitle, description, image, delay }) => {
  const styles = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, inView] = useInView();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (inView) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [inView]);

  return (
    <Grow in={flag} timeout={400}>
      <Card className={styles.root} ref={ref}>
        <CardActionArea
          className={styles.cardAction}
          component={Link}
          to={link}
        >
          <Grid container spacing={0} direction="row">
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <MuiImage
                imageStyle={
                  matchesMD
                    ? {
                        maxWidth: "100%",

                        objectFit: "cover",
                      }
                    : {
                        maxWidth: "100%",
                        height: "auto",
                        objectFit: "contain",
                        // borderTopRightRadius: "2px",
                        // borderBottomRightRadius: "2px",
                      }
                }
                // aspectRatio={matchesMD ? 1.5 : 1}
                iconContainerStyle={
                  matchesMD
                    ? {
                        maxWidth: "100%",
                        height: "auto",
                      }
                    : {
                        maxWidth: "100%",
                        height: "auto",
                      }
                }
                src={image}
                animationDuration={100}
                className={styles.profileImage}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              <CardHeader title={title} subheader={subtitle} />

              <Typography
                color="textPrimary"
                variant="h6"
                className={styles.profileDescription}
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </Grow>
  );
};

export default ProfileCard;
