import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));
const LoadingSpinner = () => {
  const styles = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <CircularProgress size={50} />
      </Grid>
    </Grid>
  );
};

export default LoadingSpinner;
