import React from "react";

//Material-UI Styles
import { makeStyles } from "@material-ui/styles";

import { Paper, Grid, Typography, Grow, Divider } from "@material-ui/core";

import Image from "material-ui-image";

const useStyles = makeStyles({
  root: { margin: "2em 10em 2em 10em" },
});

const ProfileCard = ({ image }) => {
  const styles = useStyles();
  return (
    <Paper className={styles.root}>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={12} md={12} lg={2} xl={2}>
          <Image
            imageStyle={{}}
            src={image}
            cover={true}
            animationDuration={100}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Typography variant="h6">test</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfileCard;
