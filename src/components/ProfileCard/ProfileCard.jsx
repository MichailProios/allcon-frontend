import React from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import {
  Card,
  Grid,
  Typography,
  Grow,
  CardActionArea,
  CardHeader,
  CardMedia,
} from "@material-ui/core";

import Image from "material-ui-image";

const useStyles = makeStyles({
  root: {
    // marginTop: "10em",
    // width: "auto",
    height: "20em",
    userDrag: "none",
    userSelect: "none",
  },
  profileImage: { userDrag: "none", userSelect: "none" },
  profileDescription: { padding: "0.8em", width: "100%" },
});

const ProfileCard = ({
  title,
  subtitle,
  description,
  image,
  timeout,
  flag,
}) => {
  const styles = useStyles();

  return (
    <Grow in={flag} timeout={timeout}>
      <Card className={styles.root}>
        <CardActionArea>
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
              <Image
                imageStyle={{}}
                src={image}
                cover={true}
                animationDuration={100}
                className={styles.profileImage}
              />

              {/* <CardMedia
                image={"src/utilities/images/Logos/logo-new.png"}
                title="Image"
              /> */}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
              {/* <Typography
                color="textPrimary"
                variant="h4"
                className={styles.profileDescription}
              >
                {title}
              </Typography> */}
              <CardHeader title={title} subheader={subtitle} />
              {/* <Typography className={styles.profileDescription}>
                {subtitle}
              </Typography> */}
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
